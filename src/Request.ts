import * as Error from './error';

export default class Request {

  constructor(private configure: {
    host: string, apiKey?: string, accessToken?: string, timeout?: number
  }) { }

  public get<T>(path: string, params?: any): Promise<T> {
    return this.request({ method: 'GET', path, params }).then<T>(this.parseJSON);
  }

  public post<T>(path: string, params?: any): Promise<T> {
    return this.request({ method: 'POST', path, params }).then<T>(this.parseJSON);
  }

  public put<T>(path: string, params: any): Promise<T> {
    return this.request({ method: 'PUT', path, params }).then<T>(this.parseJSON);
  }

  public patch<T>(path: string, params: any): Promise<T> {
    return this.request({ method: 'PATCH', path, params }).then<T>(this.parseJSON);
  }

  public delete<T>(path: string, params?: any): Promise<T> {
    return this.request({ method: 'DELETE', path, params }).then<T>(this.parseJSON);
  }

  public request(options: {
    method: string,
    path: string,
    params?: Params | FormData
  }): Promise<GoogleAppsScript.URL_Fetch.HTTPResponse> {
    const { method, path, params = <Params>{} } = options;
    const { apiKey, accessToken, timeout } = this.configure;
    const query: Params = apiKey ? { apiKey: apiKey } : {};
    const init: any = { method: method, headers: {} };
    if (timeout) {
      init['timeout'] = timeout;
    }
    if (!apiKey && accessToken) {
      init.headers['Authorization'] = 'Bearer ' + accessToken;
    }
    if (typeof window !== 'undefined') {
      init.mode = 'cors';
    }
    if (method !== 'GET') {
      if (params instanceof FormData) {
        init.body = <FormData>params
      } else {
        init.headers['Content-type'] = 'application/x-www-form-urlencoded';
        init.body = this.toQueryString(params);
      }
    } else {
      Object.keys(params).forEach(key => query[key] = params[key]);
    }
    const queryStr = this.toQueryString(query);
    const url = `${this.restBaseURL}/${path}` + (queryStr.length > 0 ? `?${queryStr}` : '');
    return new Promise<GoogleAppsScript.URL_Fetch.HTTPResponse>((resolve, reject) => {
      try {
        resolve(UrlFetchApp.fetch(url, init));
      }
      catch (e) {
        reject(e);
      }
    }).then(this.checkStatus);
  }

  public checkStatus(response: GoogleAppsScript.URL_Fetch.HTTPResponse): Promise<GoogleAppsScript.URL_Fetch.HTTPResponse> {
    return new Promise<GoogleAppsScript.URL_Fetch.HTTPResponse>((resolve, reject) => {
      let status = response.getResponseCode();
      if (200 <= status && status < 300) {
        resolve(response);
      } else {
        try {
          let json = response.getContentText();
          let data = JSON.parse(json);
          if (status === 401) {
            reject(new Error.BacklogAuthError(response, data));
          } else {
            reject(new Error.BacklogApiError(response, data));
          }
        }
        catch (e) {
          reject(new Error.UnexpectedError(response));
        }
      }
    });
  }

  public parseJSON<T>(response: GoogleAppsScript.URL_Fetch.HTTPResponse): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      try {
        let json = response.getContentText();
        let obj = JSON.parse(json) as T;
        resolve(obj);
      }
      catch (e) {
        reject(e);
      }
    });
  }

  private toQueryString(params: any): string {
    return Object.keys(params).reduce((result, key) => {
      const value = params[key];
      if (!value) {
        return result;
      }
      if (Array.isArray(value)) {
        (<any[]>value).forEach(v => result.push(`${key}[]=${encodeURIComponent(v)}`));
      } else {
        result.push(`${key}=${encodeURIComponent(value)}`);
      }
      return result;
    }, []).join('&');
  }

  public get webAppBaseURL(): string {
    return `https://${this.configure.host}`;
  }

  public get restBaseURL(): string {
    return `${this.webAppBaseURL}/api/v2`;
  }

}

export type Params = { [index: string]: number | string | number[] | string[]; };

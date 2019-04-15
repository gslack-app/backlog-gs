import * as Error from './Error';
import { PQ } from './PQ';

export default class Request {
    constructor(private configure: {
        host: string, apiKey?: string, accessToken?: string, timeout?: number
    }) { }

    public get<T>(path: string, params?: any): PQ<T> {
        return this.request({ method: 'GET', path, params }).then<T>(this.parseJSON) as PQ<T>;
    }

    public post<T>(path: string, params?: any): PQ<T> {
        return this.request({ method: 'POST', path, params }).then<T>(this.parseJSON) as PQ<T>;
    }

    public put<T>(path: string, params: any): PQ<T> {
        return this.request({ method: 'PUT', path, params }).then<T>(this.parseJSON) as PQ<T>;
    }

    public patch<T>(path: string, params: any): PQ<T> {
        return this.request({ method: 'PATCH', path, params }).then<T>(this.parseJSON) as PQ<T>;
    }

    public delete<T>(path: string, params?: any): PQ<T> {
        return this.request({ method: 'DELETE', path, params }).then<T>(this.parseJSON) as PQ<T>;
    }

    public request(options: {
        method: string,
        path: string,
        params?: any,
        contentType?: string
    }): PQ<GoogleAppsScript.URL_Fetch.HTTPResponse> {
        const { method, path, params } = options;
        const { apiKey, accessToken, timeout } = this.configure;
        const query: any = apiKey ? { apiKey: apiKey } : {};
        const init: any = {
            method: method.toLowerCase(),
            headers: {}
        };

        if (!apiKey && accessToken) {
            init.headers['Authorization'] = 'Bearer ' + accessToken;
        }

        if (params) {
            if (method !== 'GET') {
                init.contentType = options.contentType == 'application/json' ? 'application/json' : 'application/x-www-form-urlencoded';
                init.payload = options.contentType == 'application/json' ? JSON.stringify(params) : params;
            } else {
                Object.keys(params).forEach(key => query[key] = params[key]);
            }
        }

        const qs = this.toQueryString(query);
        const url = `${this.restBaseURL}/${path}` + (qs.length > 0 ? `?${qs}` : '');
        return new PQ<GoogleAppsScript.URL_Fetch.HTTPResponse>((resolve, reject) => {
            try {
                resolve(UrlFetchApp.fetch(url, init));
            }
            catch (e) {
                reject(e);
            }
        }).then(this.checkStatus);
    }

    public checkStatus(response: GoogleAppsScript.URL_Fetch.HTTPResponse): PQ<GoogleAppsScript.URL_Fetch.HTTPResponse> {
        return new PQ<GoogleAppsScript.URL_Fetch.HTTPResponse>((resolve, reject) => {
            let status = response.getResponseCode();
            if (200 <= status && status < 300) {
                resolve(response);
            } else {
                this.parseJSON(response).then((data: any) => {
                    if (status === 401) {
                        reject(new Error.BacklogAuthError(response, data));
                    } else {
                        reject(new Error.BacklogApiError(response, data));
                    }
                }).catch(() => reject(new Error.UnexpectedError(response)));
            }
        });
    }

    public parseJSON<T>(response: GoogleAppsScript.URL_Fetch.HTTPResponse): PQ<T> {
        return new PQ<T>((resolve, reject) => {
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
                (<any[]>value).forEach(v => result.push(`${key}[]=${v}`));
            } else {
                result.push(`${key}=${value}`);
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

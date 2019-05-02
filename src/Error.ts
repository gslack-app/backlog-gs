export class BacklogError implements Error {
    private _message: string;
    private _stack?: string;
    private _name: BacklogErrorNameType;
    private _url: string;
    private _status: number;
    private _body: { errors: BacklogErrorMessage[] };
    private _response: GoogleAppsScript.URL_Fetch.HTTPResponse;

    constructor(
        name: BacklogErrorNameType,
        response: GoogleAppsScript.URL_Fetch.HTTPResponse,
        body?: { errors: BacklogErrorMessage[] }
    ) {
        this._message = response.getContentText();
        this._name = name;
        this._url = '';
        this._status = response.getResponseCode();
        this._body = body;
        this._response = response;
    }

    get message(): string {
        return this._message;
    }

    get stack(): string {
        return this._stack;
    }

    get name(): BacklogErrorNameType {
        return this._name;
    }

    get url(): string {
        return this._url;
    }

    get status(): number {
        return this._status;
    }

    get body(): { errors: BacklogErrorMessage[] } {
        return this._body;
    }

    get response(): GoogleAppsScript.URL_Fetch.HTTPResponse {
        return this._response;
    }
}

export class BacklogApiError extends BacklogError {
    constructor(
        response: GoogleAppsScript.URL_Fetch.HTTPResponse,
        body?: { errors: BacklogErrorMessage[] }
    ) {
        super('BacklogApiError', response, body);
    }
}

export class BacklogAuthError extends BacklogError {
    constructor(
        response: GoogleAppsScript.URL_Fetch.HTTPResponse,
        body?: { errors: BacklogErrorMessage[] }
    ) {
        super('BacklogAuthError', response, body);
    }
}

export class UnexpectedError extends BacklogError {
    constructor(
        response: GoogleAppsScript.URL_Fetch.HTTPResponse
    ) {
        super('UnexpectedError', response);
    }
}

export interface BacklogErrorMessage {
    message: string;
    code: number;
    errorInfo: string;
    moreInfo: string;
}

export type BacklogErrorNameType = 'BacklogApiError' | 'BacklogAuthError' | 'UnexpectedError';

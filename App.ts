import OAuth2 from "./src/OAuth2";
import * as Entity from './src/Entity';
import { Backlog } from "./src/Backlog";

const APP_NAME = '»-(¯`·.·´¯)->Backlog<-(¯`·.·´¯)-«';

export class RequestEvent {
    queryString: string;
    parameter: {
        [index: string]: string;
    };
    parameters: {
        [index: string]: [string];
    };
    contextPath: string; // Not used, always the empty string
    contentLength: number;
    postData: {
        length: number;
        type: string;
        contents: string;
        name: string;
    };
}

function doGet(request: RequestEvent): GoogleAppsScript.Content.TextOutput | GoogleAppsScript.HTML.HtmlOutput {
    let params = request.parameter;
    let action = params.action ? params.action.toLowerCase() : '';
    let response: GoogleAppsScript.Content.TextOutput | GoogleAppsScript.HTML.HtmlOutput;
    let propSvc = PropertiesService.getScriptProperties();
    let clientId = propSvc.getProperty('backlog.clientId');
    let clientSecret = propSvc.getProperty('backlog.clientSecret');
    let host = propSvc.getProperty('backlog.host');
    let redirectUri = `${ScriptApp.getService().getUrl()}?action=callback`
    let oauth2 = new OAuth2({ clientId, clientSecret });

    switch (action) {
        case 'login':
            // KNOWN ISSUE: Backlog does not support redirect_url parameter 
            response = redirect(oauth2.getAuthorizationURL({ host }));
            break;
        case 'callback':
            let code: string = params.code;
            response = onCallback(oauth2, host, code, redirectUri);
            break;
        default:
            response = render('index', null, APP_NAME);
            break;
    }

    return response;
}

function doPost(request: RequestEvent): GoogleAppsScript.Content.TextOutput | GoogleAppsScript.HTML.HtmlOutput {
    return text('Not Supported');
}

function onCallback(oauth2: OAuth2, host: string, code: string, redirectUri?: string): GoogleAppsScript.Content.TextOutput | GoogleAppsScript.HTML.HtmlOutput {
    try {
        let accessToken: Entity.OAuth2.AccessToken;
        oauth2.getAccessToken({ host, code }).then(value => accessToken = value);
        Logger.log('Access Token: %s', accessToken);

        // Save access token.
        let myself: any;
        let bl = new Backlog({ host, accessToken: accessToken.access_token });
        bl.getMyself().then(value => myself = value);
        Logger.log('Myself: %s', myself);

        let propSvc = PropertiesService.getScriptProperties();
        propSvc.setProperty('backlog.accessToken', accessToken.access_token);
        return render('success', null, APP_NAME);
    } catch (e) {
        Logger.log('Access Token Error: %s', e.message);
        return render('error', null, APP_NAME);
    }
}

function html(files: string[], ext?: string): string {
    return files.map(function(d) {
        return HtmlService.createHtmlOutputFromFile(`views/${d}${(ext || '')}`).getContent();
    }).join('\n\n');
}

function css(files: string[]) {
    return '<style>\n' + html(files, '.css') + '</style>\n';
}

function js(files: string[]) {
    return '<script>\n' + html(files, '.js') + '</script>\n';
}

function _html(file: string, values: any): string {
    let view = HtmlService.createTemplateFromFile(`views/${file}`);
    Object.keys(values).forEach(v => (view as any)[v] = values[v]);
    return view.evaluate().getContent();
}

function _css(file: string, values: any) {
    return '<style>\n' + _html(`${file}.css`, values) + '</style>\n';
}

function _js(file: string, values: any) {
    return '<script>\n' + _html(`${file}.js`, values) + '</script>\n';
}


function text(res: any): GoogleAppsScript.Content.TextOutput {
    return ContentService.createTextOutput(res)
        .setMimeType(ContentService.MimeType.TEXT);
}

function render(template: string, values?: any, title?: string): GoogleAppsScript.HTML.HtmlOutput {
    let view = HtmlService.createTemplateFromFile(`views/${template}`);
    title = title ? title : '';

    if (values) {
        Object.keys(values).forEach(v => (view as any)[v] = values[v]);
    }

    return view.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME).setTitle(title);
}

function redirect(url: string): GoogleAppsScript.HTML.HtmlOutput {
    return render('redirect', { url: url });
}
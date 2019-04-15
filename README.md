# Backlog-GS [![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp)

Backlog API version 2 client for [Apps Script](https://developers.google.com/apps-script/)

## Required reading
Please check out the [Nulab Developers portal page](http://developer.nulab-inc.com/docs/backlog/api/2/).

## Installation

Clone this repository

## Getting started
Append your "API Key" or "OAuth2 Access Token" to requests to the API to return data. The example is in Typescript.

``` javascript

// 'xxx.backlog.jp' or 'xxx.backlogtool.com' or 'your package host'
const host = 'yourSpaceHost';
const apiKey = 'yourApiKey';
const accessToken = 'yourAccessToken';

// Use API Key
const backlog = new Backlog({ host, apikey });

// Use OAuth2 Access Token
const backlog = new Backlog({ host, accessToken });

// Returns information about your space.
backlog.getSpace().then(data => {
  Logger.log('space: %s', data);
}).catch(err => {
  Logger.log('error: %s', err.message);
});

```

### Use OAuth2 for authentication

Details on the OAuth2 process are available [here](https://developer.nulab-inc.com/docs/backlog/auth#oauth2). See [App.ts](src/App.ts) for complete source code

Here are the basic steps for OAuth2 using the Apps Script:
```` javascript
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
````

## TODO

### Download File

### Upload File

### Inspired by

* [backlog-js](https://github.com/nulab/backlog-js)
* [Implementing promises in Javascript](https://www.mcieslar.com/implementing-promises-in-javascript)

## License

MIT License

* http://www.opensource.org/licenses/mit-license.php


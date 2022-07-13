# Backlog-GS [![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp)

Backlog API version 2 client for [Apps Script](https://developers.google.com/apps-script/)

## Required reading
Please check out the [Nulab Developers portal page](http://developer.nulab-inc.com/docs/backlog/api/2/).

## Installation

* Copy `backlog.js` file in `dist` folder
* Access library using variable name `nulab`

## Getting started
Append your "API Key" or "OAuth2 Access Token" to requests to the API to return data. The example is in Typescript.

``` javascript

// 'xxx.backlog.jp' or 'xxx.backlogtool.com' or 'your package host'
const host = 'yourSpaceHost';
const apiKey = 'yourApiKey';
const accessToken = 'yourAccessToken';

// Use API Key
const backlog = new nulab.Backlog({ host, apiKey });

// Use OAuth2 Access Token
const backlog = new nulab.Backlog({ host, accessToken });

// Returns information about your space.
backlog.getSpace().then(data => {
  Logger.log('space: %s', data);
}).catch(err => {
  Logger.log('error: %s', err.message);
});

```

### Inspired by

* [backlog-js](https://github.com/nulab/backlog-js)

## License

MIT License

* http://www.opensource.org/licenses/mit-license.php


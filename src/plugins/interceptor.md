---
title: Interceptor
author: SnazzahDI
description: Intercepts outgoing requests. (WebSocket & HTTP Requests)
download:
github_profile_url: https://github.com/SnazzahDI/
github_source_url: https://github.com/SnazzahDI/Interceptor
npm_profile_url: https://www.npmjs.com/~snazzah
npm_source_url: https://www.npmjs.com/package/di-interceptor
npm_i: di-interceptor
github_issue_url: https://github.com/SnazzahDI/Interceptor/issues
discord_server:
thumbnail: https://i.imgur.com/yADpMpg.png
software: [DiscordInjections]
status:
auto: True
ghcommentid: 673
layout: product # DON'T CHANGE
---
Intercepts outgoing requests. (WebSocket & HTTP Requests)

[Wiki](https://github.com/SnazzahDI/Interceptor/wiki)

>**NOTE:** This plugin does not intercept the main Discord websocket on startup.

##Intercepting WebSocket creations
    const interceptor = this.manager.get('Interceptor');
    interceptor.on('websocket-intercepted', iee => {
    if(iee.ws.url.includes("dealer.spotify.com")) this.spotifyWS = iee;
    iee.on('data', this.spotifyData);
    });

##Intercepting HTTP requests
    const interceptor = this.manager.get('Interceptor');
    interceptor.on('request-open', (url, method, iee) => {
    if(url.includes("spotify.com")) iee.on('data', this.handleSpotifyRequest);
    });
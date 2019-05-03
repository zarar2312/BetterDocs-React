---
title: bdCompat
author: intrnl
description: Compatibility layer for running BetterDiscord plugins in Powercord
download: https://github.com/intrnl/pc-bdCompat
github_profile_url: https://github.com/intrnl/
github_source_url: https://github.com/intrnl/pc-bdCompat
github_issue_url: https://github.com/intrnl/pc-bdCompat/issues
discord_server:
software: [Powercord]
thumbnail: https://i.imgur.com/pUfaXLf.png
previews: [https://i.imgur.com/pUfaXLf.png]
dependency:
status: Updated
auto: false
ghcommentid: 736
layout: product # DON'T CHANGE
---
Compatibility layer for running BetterDiscord plugins in Powercord

[![Screenshot showing a list of BetterDiscord plugins](https://i.imgur.com/pUfaXLf.png)](https://imgur.com/a/2gWgY7q)

## Installation

Clone this repository to your Powercord install's plugins folder

```
git clone https://github.com/intrnl/pc-bdCompat
```

## Installing BD plugins

Before you download and install any BD plugins, please take a look at the [incompatibilites](#Incompatibilites) note

- Put the plugin in the `plugins` folder, if it doesn't exist then create one.
- Reload your Discord.
- Go to User Settings and head to the `BetterDiscord Plugins` section
- Enable the said plugin

# Incompatibilites

## Notes on incompatibiltiies

- Regarding monkey patching
  - Some plugins, especially those that uses their own plugin library, patches Discord's functions, and if it's not done through BD's API for monkey patching then it can lead to breakages.
  - One notable note is with [DevilBro's plugins](https://github.com/mwittrien/BetterDiscordAddons), the library used in his plugins tries to patch method responsible for handling the guild header, and thus it breaks some plugins like Powercord's Badges plugin (`pc-badges`)

- Plugins that enhances BetterDiscord's emotes feature
  - Affects plugins like EmoteSearch
  - No, they don't work. Why? Go figure.
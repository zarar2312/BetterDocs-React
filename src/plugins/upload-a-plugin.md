---
title: Upload a Plugin
sub: Uploading a plugin is as easy as 1, 2, 3...uhh and maybe more.
software: [BandagedBD,EnhancedDiscord,Powercord,DiscordInjections,BetterDiscord]
description: Want to publish your plugin to our Showcase? Follow these instructions slow & carefully to get your plugin featured for free!
status: none
maintainer_name: Placeholder
contributor_name: [Placeholder]
author: placeholder
ghcommentid: 441
date: 2018-10-26T15:27:19.930Z
---
# Publish your work
Want to publish your plugin to our [Showcase](https://discordsource.com/plugins/)? Follow these instructions slow & carefully.

## Steps
I promise it doesn't take long :)

1. [Create a new file](https://github.com/MrRobotjs/BetterDocs-React/new/master/src/plugins)
2. The name of the file is **required** to match your plugin name.
    > Make sure it's a markdown file `.md` and that it's [Kebab Case style](http://wiki.c2.com/?KebabCase). `[REQUIRED]`
3. Use the following template to ensure required fields are filled:
```md
---
  title: #Plugin Name
  author:
  description: #A SHORT Description
  download:
  maintainer_name:
  contributor_name:
  github_profile_url:
  github_source_url:
  github_issue_url:
  discord_server:
  tags:
  software: [BandagedBD,EnhancedDiscord,DiscordInjections,Powercord,BetterDiscord]
  thumbnail:
  previews:
  dependency:
  status:
  auto:
  ghcommentid: 441
  layout: product # DON'T CHANGE
---
  # A full description of your plugin. All Markdown is allowed.
```
  4. Submit. You're done!

# Helpful information
Here's is some helpful information to inform you what each field does.
  - **title** - The name of your plugin. `[REQUIRED]`
  - **author** - The name of the author of the plugin. `[REQUIRED]`
  - **maintainer_name** - The name of the current maintainer. **only use if it's different from the original developer**. `[OPTIONAL]`
  - **contributor_name** - The name of the person that contributed to this project in any way, shape or form. You can have multiple contributors by using an array. Ex. `[name,name]` `[OPTIONAL]`
  - **description** - Short paragraph describing the content and/or purpose of the plugin that will appear in the permalink of your page and other places on the site. `[REQUIRED]`
  - **download** - The direct link to the file to be downloaded. This can be the direct link to the file on a open-source website like [Github](https://github.com/). `[REQUIRED]`
  - **github\_profile\_url** - The link to your [Github](https://github.com/) profile. Ex. `https://github.com/{Author Name}/` `[OPTIONAL]`
  >You can use **gitlab\_profile\_url** or **npm\_profile\_url** instead (or all) and same goes for the source url.
  - **github\_source\_url** - For open-source plugins, this URL points to the repo that powers the plugin `[OPTIONAL]`
  - **npm\_i** - Only `[REQUIRED]` **if** using [npm](https://npmjs.com/features) as the source repository for the plugin. `[OPTIONAL]`
  - **github_issue_url** - A link to allow people to get support. (In most cases it should be the [Github issue](https://guides.github.com/features/issues/) url) `[OPTIONAL]`
  - **discord_server** - A Discord server invite to allow people to get support or give feedback for the theme. Ex. `https://discord.gg/INVITE_CODE` `[OPTIONAL]`
  - **tags** - Tags are in an array and can be seperated with commas "," like so `[tag1,tag2]`. `[OPTIONAL]`
  - **software** - The list of softwares your plugin supports. They are sorted in an array and seperated by commas "," like so `[BandagedBD,BeautifulDiscord,DiscordInjections,EnhancedDiscord,BetterDiscord]`. `[REQUIRED]`
  - **thumbnail** - A direct link to an image that will be the thumbnail and shown on the [plugins page](https://discordsource.com/plugins/). (16:9) `[REQUIRED]`
  - **previews** - A list of images that show a preview of your plugn. [Imgur](https://imgur.com) is highly recommended for compressed images and reliability. Multiple images can be added by using an Array. Ex. `[Direct link to image, Direct link to image]` `[OPTIONAL]`
  - **dependency** - Direct link(s) to the required dependencies for the plugin to function properly. Ex. `[URL, URL]` `[OPTIONAL]`
  - **status** - Values: `Updated/Oudated`. The current status of your plugin.
  - **auto** - If your plugin is hosted on [Github](https://github.com) then add `true` to allow users to automatically down the file (or even the entire repo) instead of just' visiting the site, if hosted elsewhere leave blank or remove it entirely. `[REQUIRED]`
  - **ghcommentid** - ~~The ID of the issue related to your plugin so it can be used in our comments system~~. `[REQUIRED]` 
  - **layout** - Used by the [Jekyll](https://github.com//MrRobotjs/BetterDocs/) version of this website. `[REQUIRED]` 

## Changed your mind / need to edit your submission?
If you want to edit anything in your submission later, simply edit the `.md` file by submitting another PR.

## Old website
The old website will always be up on [Github Pages](https://betterdocs.netlify.com/)

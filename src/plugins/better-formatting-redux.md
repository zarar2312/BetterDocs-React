---
title: Better Formatting Redux
author: rauenzi
description: Lets you view popout, nickname and more from your account panel at the bottom.
download: https://github.com/rauenzi/BetterDiscordAddons/blob/master/Plugins/BetterFormattingRedux/BetterFormattingRedux.plugin.js
github_profile_url: https://github.com/rauenzi/
github_source_url: https://github.com/rauenzi/BetterDiscordAddons/tree/master/Plugins/BetterFormattingRedux
github_issue_url: https://github.com/rauenzi/BetterDiscordAddons/issues/
discord_server: https://discordapp.com/invite/cdzD9wF
software: [BandagedBD,BetterDiscord]
dependency: [https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js]
status: Updated
auto: true
ghcommentid: 613
layout: product # DON'T CHANGE
---
Lets you format your messages with buttons and adds more formatting options.

![New Demo](https://i.zackrauen.com/OY2qYj.gif)

![BFRedux Demo](https://zippy.gfycat.com/HugeDeadDuckling.gif)


## Features

### Codeblocks & Programming Languages

![Codeblocks](https://i.zackrauen.com/rTdu3g.gif)

### Sortable Buttons & Tooltips

![Sortable](https://i.zackrauen.com/teYxPk.gif)

### Formatting Toolbar
BFRedux adds a handy toolbar to make formatting easier.

Click the buttons to insert tags or surround the selected text with tags.

![BFRedux Demo](https://i.imgur.com/rpPMyfl.png)

### New Formatting Options

#### Superscript (^^)
`^Sample Text^` will show up as ˢᵃᵐᵖˡᵉ ᵀᵉˣᵗ

#### Small Caps (%%)
`%Sample Text%` will show up as Sᴀᴍᴘʟᴇ Tᴇxᴛ

#### Fullwidth (##)
`##Sample Text##` will show up as Ｓａｍｐｌｅ　Ｔｅｘｔ or S A M P L E  T E X T

#### Upsidedown (&&)
`&&Sample Text&&` will show up as ʇxǝ┴ ǝldɯɐS or Sɐɯdlǝ ┴ǝxʇ

#### Varied Caps (||)
`||Sample Text||` will show up as SaMpLe TeXt or sAmPlE tExT

#### Leet (++)
`++Sample Text++` will show up as 54mp13 73x7

#### Escaping Unwanted Tags (\\)
Put a backslash before the tags if you want them to be rendered normally.

`\##Sample Text\##` will show up as \##Sample Text\##

## Plugin Settings

The settings can be found in Settings > BetterDiscord > Plugins

Note: There is no save button to click, settings update automatically.

### Toolbar Buttons

 - Allows you to choose which buttons to have on the toolbar

### Active Formats

 - Adds a checkbox for every custom format allowing you to enable/disable them

### Wrappers
The default wrappers (`^`, `%`, `##`, `&&`, `||`, `++`) can all be customized in the settings panel. They can be any symbol or letters of any length.

![BFRedux Wrappers](https://i.imgur.com/dENmVfI.png)

### Formatting
 - The fullwidth format can switch between Ｓａｍｐｌｅ　Ｔｅｘｔ and S A M P L E  T E X T.
 - The upsidedown text can switch between ʇxǝ┴ ǝldɯɐS and Sɐɯdlǝ ┴ǝxʇ.
 - The varied caps can switch between SaMpLe TeXt and sAmPlE tExT. (Change whether to start with a capital)
 
![BFRedux Formatting](https://i.imgur.com/9aRPLgp.png)
 
### Functional Plugin Settings

 - You can switch between the text buttons or icons for buttons

![BFRedux Chaining](https://i.imgur.com/upVOQbV.png)

 - You can change between the default hover mode (from above), or click to see toolbar.
 
![BFRedux Click Mode](https://i.imgur.com/z24gBX0.gif)
 - Optionally, you can make it disappear when the message is sent
 
![BFRedux Send Clear](https://i.imgur.com/BuLecX9.gif)

 - You can also switch format chaining order from outside first to inside first which means:
 
`&&##Sample Text##&&` will give you ｔｘｅＴ　ｅｌｐｍａＳ instead of ʇｘǝ┴　ǝｌｄɯɐＳ (May not appear right in browser)

`##&&Sample Text&&##` will give you ʇｘǝ┴　ǝｌｄɯɐＳ instead of ＆＆Ｓａｍｐｌｅ　Ｔｅｘｔ＆＆ (May not appear right in browser)

 ![BFRedux Chaining](https://i.imgur.com/1U5k8Dy.png)
 
### Style Settings
![BFRedux Style](https://i.imgur.com/lTp1mXG.png)

 - Change the opacity of the toolbar
 - Change the size of the text
 - Swap the toolbar (and arrow) from the right side (above) to the left side
 
 ![BFRedux Sideswap](https://i.imgur.com/RBE6x1G.gif)

## Special Thanks
 - Anxeal#4160 for the original Better Formatting - This is based on the original BetterFormatting by Anxeal#4160 although it has been nearly entirely rewritten. You can find that [here](https://github.com/Anxeal/BDEnhancements/tree/master/plugins/BetterFormatting). 
 - BeardDesign#6223 - The CSS for the toolbar is a modified version of the CSS written by BeardDesign creator of Beard's Material Design Theme, a theme for BetterDiscord. His theme is compatible with several plugins so be sure to check it out [here](https://www.beard-design.com/discord-material-theme).
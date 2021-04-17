# Runescape api

This is simple wrapper on runescape api. You can get more information from here: https://runescape.wiki/w/Application_programming_interface

## Installation

    yarn add @sylchi/runescape-api

## Usage

```javascript
  const { hiScores } = require('@sylchi/runescape-api');
	
	hiScores('osrs', 'playername').then(data => console.log(data));
```


Currently only hiscores for skills are supported. First parameter can either be `osrs` or `rs3`
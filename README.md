# TwitchBox
![alt text](https://image.ibb.co/d1MDrH/twitchbox.png)

## -TBA-

## Getting Started

### Import all necessary files
1. Copy the "twitchbox.js" and "stylesheet.css" in your project folder.

2. Link both files in the head area.
  ```
  <link rel="stylesheet" href="stylesheet.css">
  <script type="text/javascript" src="twitchbox.js"></script>
  ```
  
3. If you're not already using jQuery, link it too!
  ```
  <script src="https://code.jquery.com/jquery-latest.js"></script>
  ```

### Prepare Twitchbox

1. You need to have your own Twitch Client ID
  * [dev.twitch.tv](https://dev.twitch.tv/docs/v5) - Get it here for free!

2. Paste your ID into the "twitchbox.js" (First line)
  ```
  var twitchKey = twitchClientIDHere;
  ```

3. Done

### Prepare your output file & Launch

1. You need to include and <div> called "twitchbox" into your file. (I try to simplify that later)
  ```
  <div id="twitchbox"></div>
  ```

2. Now you can create a TwitchBox by calling the script in your head area
  ```
  <script>
    twitchbox("channelName");
  </script>
  ```
  
## You're done.

![alt text](http://lyyn.fr.nf/photoshow/?t=Thb&f=meme+face%2F1282786204310.jpg)

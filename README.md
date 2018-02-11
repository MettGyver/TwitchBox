# TwitchBox
![alt text](https://image.ibb.co/d1MDrH/twitchbox.png)

## What does it looks like?
-TBA-

I'm not done yet! Due to the fact that it is still in development, I'm going to change some things and try to simplify some things. 
Don't be too hard. :smile:

## Getting Started

### Import all necessary files.

1. Copy the "twitchbox.js" and "stylesheet.css" into your project folder.

2. Link both files inside your head area.
  ```
  <link rel="stylesheet" href="stylesheet.css">
  <script type="text/javascript" src="twitchbox.js"></script>
  ```
  
3. If you're not already using jQuery, link it too!
  ```
  <script src="https://code.jquery.com/jquery-latest.js"></script>
  ```

### Prepare Twitchbox.

1. You need to have your own Twitch Client ID
  * [dev.twitch.tv](https://dev.twitch.tv/docs/v5) - Get it here for free!

2. Paste your ID into the "twitchbox.js" (First line)
  ```
  var twitchKey = twitchClientIDHere;
  ```

3. Done

### Prepare your output file & launch.

1. You need to include an <div> called "twitchbox" into your file. (I will try to simplify that later :yum:)
  ```
  <div id="twitchbox"></div>
  ```

2. Now you can create an TwitchBox by calling the script inside your head area.
  ```
  <script>
    twitchbox("channelName");
  </script>
  ```
  
### You're done. :purple_heart:


![alt text](http://lyyn.fr.nf/photoshow/?t=Thb&f=meme+face%2F1282786204310.jpg)



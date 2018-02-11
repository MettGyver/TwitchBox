var twitchKey = config.TWICH_KEY;

function getAPI(name, nummer) {
    $.ajax({
        type: 'GET',
        url: 'https://api.twitch.tv/kraken/channels/' + name,
        headers: {
            'Client-ID': twitchKey
        },
        success: function (data) {
            $('#profilbild' + name).attr("src", data["logo"]);
            $('#name' + name).text(data["display_name"]);
            $('#followerbox' + name).text('Follower: ' + data["followers"])
            $('#link' + name).attr("href", data["url"]);
            $('#channel' + name).css("background-image", 'url(' + data["profile_banner"] + ')');
            $('#channel' + name).css("background-size", 'cover');

            if (data["partner"] === true) {
                $('#partner' + name).attr("src", "bilder/ja.png");
            } else {
                $('#partner' + name).attr("src", "bilder/nein.png");
            }

            checkOnline(name);

            window.setInterval(function () {
                checkOnline(name)
            }, 10000);

        },
        error: function (data) {
            //alert("Oh noes");
        }
    });
}

function checkOnline(name) {
    $.ajax({
        type: 'GET',
        url: 'https://api.twitch.tv/kraken/streams/' + name,
        headers: {
            'Client-ID': 'l8ggy8znc9nauiyzaa1pr9x373pnaa'
        },
        success: function (data) {
            //$('#profilbild' + name).attr("src", data["logo"]);

            if (data["stream"] === null) {
                $('#online' + name).text("Offline");
                $('#online' + name).css({
                    'color': 'red'
                });
                $('#blink' + name).addClass("circleOffline");
            } else {
                $('#online' + name).text("Online with " + data["stream"]["viewers"] + " Viewers");
                $('#online' + name).css({
                    'color': 'green'
                });
                $('#circle' + name).css({
                    'background-color': 'green'
                });
                $('#blink' + name).addClass("circleOnline pulse");
            }

        },
        error: function (data) {
            alert("Oh noes");
        }
    });
}

function twitchbox(name) {
    $(document).ready(function () {
        $('<div class="twitchbox" id="channel' + name + '"></div>').appendTo("#twitchbox");
        $('<img height="42" width="42" id="profilbild' + name + '">').appendTo("#channel" + name);
        $('<div id="name' + name + '" class="font"></div>').appendTo("#channel" + name);
        $('<div id="followerbox' + name + '"><div id="follower' + name + '"></div></div>').appendTo("#channel" + name);
        $('<span>Partner?</span> <img height="16" width="16" id="partner' + name + '">').appendTo("#channel" + name);
        $('<div id="blink' + name + '"></div><div id="online' + name + '"></div>').appendTo("#channel" + name);
        $('<a href="" id="link' + name + '" title="Link">Link</a>').appendTo("#channel" + name);

        getAPI(name);
    });
}

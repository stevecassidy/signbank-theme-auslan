$(document).ready(function() {

});

var clips = ['ns_010', 'ns_011-019', 'ns_020-090', 'ns_022-099', 'ns_200-900', 'ns_100', 'ns_1k', 'ns_1m', 'ns_1g'];

function make_source(item) {
    return base_url+"numbersigns/"+clips[item]+".mp4";
}

var currentNS = -1;

function playNS(n) { 

        // reset the currentNS image to unselected
        if (currentNS>=0) {
            img = document.getElementById(clips[currentNS]);
            img.src = base_url+"numbersigns/"+clips[currentNS]+".jpg";
        }
        // remember what we're playing and replace the image with selected
        currentNS = n;
        img = document.getElementById(clips[n]);
        img.src = base_url+"numbersigns/"+clips[n]+"_select.jpg";

        var player = videojs('nsvideo');
        player.src(make_source(n));
        player.play();
}


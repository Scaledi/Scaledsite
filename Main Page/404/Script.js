var message=new Array();
message[0] = "Poking around in places we shouldent be?";
message[1] = "You must be lost, and no, i Can't help you.";
message[2] = "just go away";
message[3] = "4040404040404040404040404040404040404";
message[4] = "Nooooooooooooooooooooooooo";
message[5] = "Don't Give me that look";
message[6] = "I dident take you here, so why make me dig you out";
message[7] = "dont bother";
message[8] = "lol haha funny number 69 ok boomer sksskssks";
message[9] = "mommmmmmmmmmmmmmmmmmmmmmmmmm";
message[10] = "extra thiccccccc error message"
var q = message.length;
var whichquote=Math.round(Math.random()*(q-1));

function showquote(){
    document.getElementById('message').innerHTML = message[whichquote];
    document.getElementsByTagName('img')[whichquote].style.display="block";
}
showquote();

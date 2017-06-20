/* 
 * Author : echo0 
 * Email   : ech0.extreme@foxmail.com
 * Time    : 2017年6月19日20:54:32 
 */

//  need jquery 
//  need velocity 
//  function lib
var Animations = {
    p:{
        opacity:0.4719,
        scale:1.1,
    },
    o:{
        duration:500
    }
};
function sendButtonEffects() {
    var $sendButtonImg = $("#sendButton");
        $sendButtonImg.velocity(Animations)
                .velocity("reverse",{duration: 500});
}

function emojiButtonEffect(){
    $("#emojiButton").velocity(Animations)
            .velocity("reverse",{duration:500});
}
function pictureButtonEffect(){
    $("#pictureButton").velocity(Animations)
            .velocity("reverse",{duration:500});
}
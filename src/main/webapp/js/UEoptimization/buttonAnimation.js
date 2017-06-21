/* 
 * Author : echo0 
 * Email   : ech0.extreme@foxmail.com
 * Time    : 2017年6月19日20:54:32 
 */

//  need jquery 
//  need velocity 
//  function lib
var buttonAnimation = {
    p:{
        opacity:0.4719,
        scale:1.1,
    },
    o:{
        duration:500
    }
};
function gifButtonEffects(){
     $("#gifButton").velocity(buttonAnimation)
            .velocity("reverse",{duration:500});
}
function shakeButtonEffects(){
     $("#shakeButton").velocity(buttonAnimation)
            .velocity("reverse",{duration:500});
}
function sendButtonEffects() {
    var $sendButtonImg = $("#sendButton");
        $sendButtonImg.velocity(buttonAnimation)
                .velocity("reverse",{duration: 500});
}

function emojiButtonEffect(){
    $("#emojiButton").velocity(buttonAnimation)
            .velocity("reverse",{duration:500});
}
function pictureButtonEffect(){
    $("#pictureButton").velocity(buttonAnimation)
            .velocity("reverse",{duration:500});
}
function closeButtonEffect_on(){
    $("#closeImg").attr("src","../img/button/close_1.png");
}
function closeButtonEffect_out(){
        $("#closeImg").attr("src","../img/button/close.png");
}
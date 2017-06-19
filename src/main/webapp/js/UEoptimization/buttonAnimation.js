/* 
 * Author : echo0 
 * Email   : ech0.extreme@foxmail.com
 * Time    : 2017年6月19日20:54:32 
 */

//  need jquery 
//  need velocity 
//  function lib
function sendButtonEffects() {
    var $sendButtonImg = $("#sendButton");
        $sendButtonImg.velocity({opacity:0.3},{duration:1000})
                .velocity("reverse",{duration: 1000});
}
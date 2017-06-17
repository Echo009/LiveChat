/* 
 * Author : echo0 
 * Email   : ech0.extreme@foxmail.com
 * Time    : 2017年6月17日09:39:22
 */
// need jquery 
// function lib 
function scrollToMsgPanelBottom(){
    var $message = $("#message");
    var height = $message[0].scrollHeight;
    $message.scrollTop(height);
}
function scrollToMsgPanelTop(){
    var $message = $("#message");
    $message.scrollTop(0);
}
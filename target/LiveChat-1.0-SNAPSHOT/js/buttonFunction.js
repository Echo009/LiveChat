/* 
 * Author : echo0 
 * Email   : ech0.extreme@foxmail.com
 * Time   : 2017年6月14日09:12:40
 */
// enable jquery

//<img class='emoji' src='../img/phiz/22.png/>
// class : emoji 
// title : serialNumber 
//
//message-own
//message-other
//<div class="message-own"></div>
//



var emojiButtonStatus = false;
var emojisIsCraeted = false;
var customScrollbarStatus = false;
var $inputMsg = $('#msgInput');
var $messagePanel = $('#message');
var $emojiWrapper = $('#emojiWrapper');


function sendMsg() {
    if($inputMsg.html()==""){
        console.log("no message !");
        return ;
    }
    addOwnMessageToPanel();
    $inputMsg.html("");
}
//    <div class="message-own-warpper">
//           <div  class="message-content-own"></div>
//           <img class="message-headImg-own" src="../img/headImg/echo.jpg"/>
//      </div>
function addOwnMessageToPanel() {
    var ownMsgWrapperPerfix = "<div class='message-own-warpper'>" +
            "<div  class='message-content-own'>";
    var divEndTag = "</div>";
    var ownMsgWrapperSuffix = "<img class='message-headImg-own' src='../img/headImg/echo.jpg'/>";
    var ownMsgHtml = ownMsgWrapperPerfix+$inputMsg.html()+divEndTag+ownMsgWrapperSuffix+divEndTag;
    $messagePanel.append(ownMsgHtml);
}

function emoji() {
    if (emojiButtonStatus) {
        $emojiWrapper.hide(719);
        console.log(" Try to hide emoji ~ ");
        emojiButtonStatus = false;
    } else {
        if (!emojisIsCraeted) {
            createEmojis();
            addEmojiClick();
            emojisIsCraeted = true;
        }
         console.log(" Try to show emoji ~ ");
        $emojiWrapper.show(719);
        $messagePanel.prop("disabled", true);
        if (!customScrollbarStatus) {
            $emojiWrapper.mCustomScrollbar({theme: "inset-3-dark"});
            customScrollbarStatus = true;
        }
        emojiButtonStatus = true;
    }
}
function createEmojis() {
    console.log(" Try to create emoji ~ ");
    var $emojiWrapper = $('#emojiWrapper');
    var emojiSrcPrefix = "<img class='emoji' src='../img/phiz/";
    var emojiSrcSuffix = ".png' ";
    var emojiTitlePrefix = " title=' ";
    var emojiTitleSuffix = " ' />";
    var emojis = "";
    for (var i = 1; i < 50; i++) {
        emojis = emojis + emojiSrcPrefix + i + emojiSrcSuffix + emojiTitlePrefix + i + emojiTitleSuffix;
    }
    var $emojis = $(emojis);
    $emojis.appendTo($emojiWrapper);
}
//为emoji 添加点击事件 ： 
//  获取 被点击的dom 元素，将其添加到msgInput元素的末尾。
//  关闭emojiWrapper 
function addEmojiClick() {
    $('.emoji').click(function () {
        console.log($(this).attr('title'));
        var $msgInput = $('#msgInput');
        var $emoji = $(this).clone();
        $msgInput.append($emoji);
        emoji();
    });
    $emojiWrapper.mouseleave(function (){
        emoji();
    });
}




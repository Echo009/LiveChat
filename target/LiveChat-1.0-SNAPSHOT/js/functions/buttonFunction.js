/* 
 * Author : echo0 
 * Email   : ech0.extreme@foxmail.com
 * Time   : 2017年6月14日09:12:40
 */
// enable jquery
//need usernameString
// need autoScroll.js
var username;

var emojiButtonStatus = false;
var customScrollbarStatus = false;
var $messagePanel = $('#message');
var $emojiWrapper = $('#emojiWrapper');

if (typeof (usernameString) == "undefined") {
    username = "Anonymous";
} else {
    username = usernameString;
}

//#pictureButton
$(function () {
    var fileSelect = document.getElementById("pictureButton"),
            fileElem = document.getElementById("choosePic");
    fileSelect.addEventListener("click", function (e) {
        if (fileElem) {
            fileElem.click();
        }
        e.preventDefault(); // prevent navigation to "#"
    }, false);
});


//         '<div class='message-other-warpper'>
//                 <img class='message-headImg-other' src='../img/headImg/echo.jpg'/>
//                  <div class='message-username'>Echo0</div>
//                 <div  class='message-content-other'>mdzz ！</div>
//        </div>'
//--------------------------------------------addMessage
function addOtherMessageToPanel(otherMsgContentHtml, username) {//wrap otherMsg
    var headImgString = "default";
    if (typeof (username) == "undefined") {
        username = "Anonymous";
    }
    if (username == "Lan" || username == "Echo0") {
        headImgString = username;
    } else {
        headImgString = "default";
    }
    var otherMsgWrapperPerfix = "<div class='message-other-warpper'>" +
            "<img class='message-headImg-other' src='../img/headImg/";
    var otherMsgHeadImgSuffix = ".jpg'/>";
    var otherMsgUsernamePerfix = " <div class='message-username'>"
//    +username
    var divEndTag = "</div>";
    var otherMsgContentPerfix = "<div  class='message-content-other'>";
    var otherMsgHtml = otherMsgWrapperPerfix + headImgString + otherMsgHeadImgSuffix
            + otherMsgUsernamePerfix + username + divEndTag
            + otherMsgContentPerfix + otherMsgContentHtml + divEndTag;
    $messagePanel.append(otherMsgHtml);
    scrollToMsgPanelBottom();
//    console.log("otherMsg : " + otherMsgHtml);
}
//    <div class="message-own-warpper">
//           <div  class="message-content-own">好喜欢你</div>
//           <div class='message-username'>Echo0</div>
//           <img class="message-headImg-own" src="../img/headImg/echo.jpg"/>
//      </div>
//      var 
//--------------------------------------------addMessage
function addOwnMessageToPanel(msg) { //wrap ownMsg
    var headImgString;
    if (username == "Lan" || username == "Echo0") {
        headImgString = username;
    } else {
        headImgString = "default";
    }
    var ownMsgWrapperPerfix = "<div class='message-own-warpper'>" +
            "<div  class='message-content-own'>";
    var ownMsgUsernamePerfix = "<div class='message-username'>";
    var divEndTag = "</div>";
    var ownMsgWrapperSuffix = "<img class='message-headImg-own' src='../img/headImg/";
    var ownMsgHeadImgSuffix = ".jpg'/>";
    var ownMsgHtml = ownMsgWrapperPerfix + msg + divEndTag + ownMsgUsernamePerfix
            + username + divEndTag + ownMsgWrapperSuffix
            + headImgString + ownMsgHeadImgSuffix + divEndTag;
    $messagePanel.append(ownMsgHtml);
    scrollToMsgPanelBottom();
//    return 'ownMsg  : ' + ownMsgHtml;
}
//--------------------------------------------emoji
function emoji() {
    $emojiWrapper.slideToggle();
}
//<img class='emoji' src='../img/phiz/22.png/>
// class : emoji 
// title : serialNumber 
$(function createEmojis() {
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
    $emojiWrapper.hide();
    $emojiWrapper.mCustomScrollbar({theme: "inset-3-dark"});
//为emoji 添加点击事件 ： 
//  获取 被点击的dom 元素，将其添加到msgInput元素的末尾。
//  关闭emojiWrapper 
    $('.emoji').click(function () {
        console.log($(this).attr('title'));
        var $msgInput = $('#msgInput');
        var $emoji = $(this).clone();
        $msgInput.append($emoji);
        emoji();
    });
    $emojiWrapper.mouseleave(function () {
        $(this).hide(719);
    });
});






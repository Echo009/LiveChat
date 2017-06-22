/* 
 * Author : echo0 
 * Email   : ech0.extreme@foxmail.com
 * Time    : 2017年6月16日19:21:06
 */
//{
//    "msgType": 0,
//    "from": "username",
//    "to": "username",
//    "msgContent": "This is a simple message from echo0",
//    "containImg": true,
//    "timeStamp": "2017-06-16T07:30:01.219Z"
//}
//  msgType : 
//    0 : 群发
//    1 : 发送给某个特定用户
//    2 : 更新用户列表 +1
//    3 : 更新用户列表 - 1 
//    4 : 初始化用户列表
//#userList
//                    <div id='userList'>
//                        <div id='user-username'  class='user' title='Echo0'>
//                            <img class='user-headImg' src='../img/headImg/default.jpg'>
//                            <div class='username'>Echo0</div>
//                        </div>
//                    </div>
//#onlineUserAmount


// need velocity !
//    $(thisEle).velocity("fadeIn", {duration: 1500});
//    $(thisEle).velocity("fadeOut", {duration: 1500});


var $onlineUserAmount = $("#onlineUserAmount");
var $userList = $("#userList");
//send msg to sb 
function setToSb() {
    $(".user").bind("click", function () {
        var toUser = $(this).text();
        $("#assignReceiver").text(toUser);
        say("现在你可以单独与 "+toUser+" 畅聊了~");
    });
}

function addUserToUserListByUsername(username) {
    console.log("add : " + username);
    var amount = $onlineUserAmount.text();
    amount++;
    $onlineUserAmount.text(amount);

    var headImgString = "default";
    if (username == "Echo0" || username == "Lan") {
        headImgString = username;
    }
    var userPanelWrapperPerfix = "<div class='user' title='";//+username
    var headImgWrapperPerfix = "'><img class='user-headImg' src='../img/headImg/";//+headImgString 
    var usernameWrapperPerfix = ".jpg'><div class='username'>";//+username 
    if (username == "Echo0" || username == "Lan") {
        usernameWrapperPerfix = ".jpg'><div class='username vipUser' style='color: #f00;'>";//+username 
    }
    var divEndTag = "</div>";
    var user = userPanelWrapperPerfix + username
            + headImgWrapperPerfix + headImgString
            + usernameWrapperPerfix + username + divEndTag + divEndTag;
    $userList.append(user);
    setToSb();
//    .user[title='username']

    var thisEle = ".user[title='" + username + "']";
    $(thisEle).velocity("transition.slideRightIn", {duration: 1719});
    if (username == "Echo0" || username == "Lan") {
        $(thisEle).velocity({opacity: 0.5}, {duration: 519, loop: true});
        $(".vipUser").velocity({color: "#f01"}, {duration: 200, loop: true});
    } else {
        $(thisEle).velocity({opacity: 0.5}, {duration: 519, loop: 3});
    }
}
function removeUserFromUserListByUsername(username) {
    var amount = $onlineUserAmount.text();
    console.log("remove : " + username);
    amount--;
    $onlineUserAmount.text(amount);

    var selector = ".user[title='" + username + "']";
    $(selector).remove();
}
function cleanUserPanel() { //清除用户面板内的所有内容
    console.log("try to clean userPanel : ");
    var $users = $("#userList .user");
    $onlineUserAmount.text("0");
    $users.each(function () {
        var time = 2500;
        $(this).velocity("fadeOut", {duration: time -= 200});
    });
    setTimeout(function () {
        $userList.html("");
    }, 2500);
}

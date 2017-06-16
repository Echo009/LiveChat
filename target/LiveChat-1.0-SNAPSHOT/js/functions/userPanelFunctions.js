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

var $onlineUserAmount = $("#onlineUserAmount");
var $userList=$("#userList");
function addUserToUserListByUsername(username) {
    var amount = $onlineUserAmount.text();
    amount++;
    $onlineUserAmount.text(amount);

    var headImgString = "default";
    if (username == "Echo0" || username == "Lan") {
        headImgString = username;
    }
    var userPanelWrapperPerfix = "<div id='user-username'  class='user' title='";//+username
    var headImgWrapperPerfix = "'><img class='user-headImg' src='../img/headImg/";//+headImgString 
    var usernameWrapperPerfix = ".jpg'><div class='username'>";//+username 
    var divEndTag = "</div>";
    var user = userPanelWrapperPerfix + username
            + headImgWrapperPerfix + headImgString
            + usernameWrapperPerfix + username + divEndTag + divEndTag;
    $userList.append(user);
}
function removeUserFromUserListByUsername(username) {
    var amount = $onlineUserAmount.text();
    amount--;
    $onlineUserAmount.text(amount);

    var selector = "#user-username[title='" + username + "']";
    $(selector).remove();
}

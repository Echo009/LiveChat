/* 
 * Author : echo0 
 * Email   : ech0.extreme@foxmail.com
 * Time    : 2017年6月15日11:09:34 
 */
//  connect to webSocket server 


//  provide usernameString
//  local Test : 
var serverUrl = 'ws://localhost:8080/LiveChat/server/';
//var serverUrl = 'ws://echo0.cn:8080/LiveChat-1.0-SNAPSHOT/server/';
var webSocket;
var message; //消息正文 
var socketStatus = 0;
var usernameString;
var $inputMsg = $('#msgInput');

//get username
//@ServerEndpoint("/server/{userName}")
var $username = $('#user-name');
usernameString = $username.text();

$(function () {
    serverUrl = serverUrl + $username.text();
    webSocket = new WebSocket(serverUrl);
    initWebSocket(webSocket);
    status = 1;
});
//#message
// decorate message by json 
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
function onMessage(event) { //to show other msg
    console.log(event.data);
    // to do  提取data中的 消息正文 以及用户名 ,消息类型
    // formMsgObject(msgJsonString)
    var msg=formMsgObject(event.data);
    var type = msg.msgType;
    var fromUsername=msg.from;
    var msgContent = msg.msgContent;
    if(type==0){ 
        addOtherMessageToPanel(msgContent,fromUsername);
    }
    else if(type==2){// add user  to userPanel
        addUserToUserListByUsername(msgContent);// 正文中仅包含单个用户名
    }
    else if(type==3){//remove user from userPanel 
        removeUserFromUserListByUsername(msgContent);
    }
}
//#msgInput
function sendMsg() {//to send msg , and add ownMsg to MessagePannel
    message = $inputMsg.html();
    if (message == "") {
        console.log("no message !");
        return;
    }
    addOwnMessageToPanel(message);
    $inputMsg.html("");
//    to do  encapsulate message .
//    encapsulateMsg(type,from,msgContent,to,containImg)
//   目前仅实现群发 纯文本消息
   message= encapsulateMsg(0,usernameString,message,"",false);
    webSocket.send(message);
}



function onOpen(event) {
//    alert("connection establishment");
    console.log("connection establishment");
}

function onError(event) {
    alert("error ", event.data);
    location.reload(true);
}

function initWebSocket(webSocket) {

    webSocket.onerror = function (event) {
        onError(event);
    };

    webSocket.onopen = function (event) {
        onOpen(event);
    };

    webSocket.onmessage = function (event) {
        onMessage(event);
    };
}

$(window).bind('beforeunload', function () { //关闭webSocket
    if (status == 1) {
        webSocket.close();
    }
});


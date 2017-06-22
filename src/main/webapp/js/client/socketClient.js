/* 
 * Author : echo0 
 * Email   : ech0.extreme@foxmail.com
 * Time    : 2017年6月15日11:09:34 
 */
//  connect to webSocket server 


//  provide usernameString
//  local Test : 
//var serverUrl = 'ws://localhost:8080/LiveChat/server/';
var serverUrl = 'ws://echo0.cn:8080/LiveChat-1.0-SNAPSHOT/server/';
//var serverUrl = 'ws://10.1.13.176/LiveChat-1.0-SNAPSHOT/server/';
var webSocket;
var message; //消息正文 
var socketStatus = 0;
var usernameString;
var $inputMsg = $('#msgInput');
var canSendShake = true;

//get username
//@ServerEndpoint("/server/{userName}")
var $username = $('#user-name');
usernameString = $username.text();

$(function () {
    serverUrl = serverUrl + $username.text();
    webSocket = new WebSocket(serverUrl);
    initWebSocket(webSocket);
    socketStatus = 1;
});
//#message
// decorate message by json 
//{
//    "msgType": 0,
//    "from": "username",
//    "to": "username",
//    "msgContent": "This is a simple message from echo0",
//    "containImg": true,
//    "timeStamp": "2017-06-16 15:41:40"
//}
//  msgType : 
//    0 : 群发
//    1 : 发送给某个特定用户
//    2 : 更新用户列表 +1
//    3 : 更新用户列表 - 1 
//    4 : 初始化用户列表
//    5 : 窗口抖动
function onMessage(event) { //to show other msg
    // to do  提取data中的 消息正文 以及用户名 ,消息类型
    // formMsgObject(msgJsonString)
    var msg = formMsgObject(event.data);
    var type = msg.msgType;
    var fromUsername = msg.from;
    var msgContent = msg.msgContent;
    var time = msg.timeStamp;
    console.log(type + " " + fromUsername);
    if (type == 0) {
        addOtherMessageToPanel(msgContent, fromUsername);
    } else if (type == 1) {//receive from sb
        msgContent = msgContent + "<div id='anotation'><pre>Here is a message For You , At " + time
                + "</pre></div>";
        addOtherMessageToPanel(msgContent, fromUsername);
    } else if (type == 5) {//shake window
        shakeWindow();
        msgContent = "<img src='../img/fun/shake.png'>";
        addOtherMessageToPanel(msgContent, fromUsername);
    } else if (type == 2) {// add user  to userPanel
        addUserToUserListByUsername(msgContent);// 正文中仅包含单个用户名
    } else if (type == 3) {//remove user from userPanel 
        removeUserFromUserListByUsername(msgContent);
    }
}
//#msgInput
//#assignReceiver
function sendMsg() {//to send msg , and add ownMsg to MessagePannel
    message = $inputMsg.html();
    var temp =message.replace("<div><br></div>", "")//去掉回车换行
    temp = temp.replace("<div><br></div>", "")
    if (temp == "") {
        say("不能发送空消息哦！", "", 1000);
        return;
    }
    var toUser = $("#assignReceiver").text();
    if (toUser == "All users") {
        //群发
        addOwnMessageToPanel(message);
        $inputMsg.html("");
//    to do  encapsulate message .
//    encapsulateMsg(type,from,msgContent,to,containImg)
        message = encapsulateMsg(0, usernameString, message, "", false);
        webSocket.send(message);
    } else {
        //to sb 
        var temp = encapsulateMsg(1, usernameString, message, toUser, false);
        var time = formMsgObject(temp).timeStamp;
        webSocket.send(temp);
        message = message + "<div id='anotation'><pre>Send To " + toUser + " , At " + time
                + "</pre></div>";
        addOwnMessageToPanel(message);
        $inputMsg.html("");
    }
}
//send shakeMsg
function sendShakeMsg() {
    if (canSendShake) {
        canSendShake = false;
        shakeWindow();
        message = "<img src='../img/fun/shake.png'>";
        addOwnMessageToPanel(message);
        message = encapsulateMsg(5, usernameString, "[shake]", "", false);
        webSocket.send(message);
        setTimeout(function () {
            canSendShake = true;
        }, 8000);
    } else {
        say("发送窗口抖动过于频繁，请稍候再试！");
    }
}
function onOpen(event) {
    console.log("connection establishment");
}

function onError(event) {
    say("Error " + event.data);
    location.reload(true);
}
function reConnect() {
    webSocket = new WebSocket(serverUrl);
    initWebSocket(webSocket);
    console.log("reConnect !");
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
    webSocket.onclose = function () {
        console.log("connection has been closed !");  //在这里需要重连或者退出或者直接刷新
        console.log("try to reConnect !");
        //init userPanel
        cleanUserPanel();
        setTimeout(function () {
            reConnect();
        }, 3000);
    };
}

$(window).bind('beforeunload', function () { //关闭webSocket
    if (status == 1) {
        webSocket.close();
    }
});


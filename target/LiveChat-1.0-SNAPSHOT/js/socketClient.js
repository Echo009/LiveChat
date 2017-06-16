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
var message;
var socketStatus = 0;
var usernameString;
var $inputMsg = $('#msgInput');

//get username
//@ServerEndpoint("/server/{userName}")
var $username = $('#user-name');
usernameString = $username.text();

serverUrl = serverUrl + usernameString;


$(function () {
    serverUrl = serverUrl + $username.text();
    webSocket = new WebSocket(serverUrl);
    initWebSocket(webSocket);
    status = 1;
});


//#message


function onMessage(event) { //to show other msg
    console.log(event.data);
    addOtherMessageToPanel(event.data);

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
    webSocket.send(message);
}


// decorate message by json 
{
    username:"username";
    msg : "...";
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


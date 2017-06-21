/* 
 * Author : echo0 
 * Email   : ech0.extreme@foxmail.com
 * Time   : 2017年6月16日11:10:01 
 */


//  json 封装消息和解封消息
//example ： 
//{
//    "msgType": 0,
//    "from": "username",
//    "to": "username",
//    "msgContent": "This is a simple message from echo0",
//    "containImg": true,
//    "timeStamp": "yyyy-MM-dd hh:mm:ss"
//}
//  msgType : 
//    0 : 群发
//    1 : 发送给某个特定用户
//    2 : 更新用户列表 
//    3 : 更新用户列表 
//    4 : 初始化用户列表
//    5 :窗口抖动
//independent

Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};
function msgFormat() {
    this.msgType = 0;
    this.from = "";
    this.to = "";
    this.msgContent = "";
    this.containImg = "";
    this.timeStamp = new Date().Format("yyyy-MM-dd hh:mm:ss");
}
function encapsulateMsg(type,from,msgContent,to,containImg){//to jsonString 
    var msg = new msgFormat();
    msg.msgType=type;
    msg.from=from;
    msg.to=to;
    msg.msgContent=msgContent;
    msg.containImg=containImg;
    return  JSON.stringify(msg);
}
function formMsgObject(msgJsonString){ //form object 
    var msgObject = JSON.parse(msgJsonString);
    return msgObject;
}

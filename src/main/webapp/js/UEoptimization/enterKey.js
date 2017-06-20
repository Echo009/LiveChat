/* 
 * Author : echo0 
 * Email   : ech0.extreme@foxmail.com
 * Time    : 2017年6月20日09:17:06
 */

//  need jquery
//  监听回车键
$(function () {
    $("#authCodeInput").bind("keydown", function (e) {
        // 兼容FF和IE和Opera    
        var theEvent = e || window.event;
        var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
        if (code == 13) {
            //回车查询
            checkInput();
        }
    });
    $("#msgInput").bind("keydown", function (e) {
        // 兼容FF和IE和Opera    
        var theEvent = e || window.event;
        var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
        if (code == 13) {
            //回车发送消息 
            var temp = $("#msgInput").html().replace("<div><br></div>", "")//去掉回车换行
            temp = temp.replace("<div><br></div>", "") 
            $("#msgInput").html(temp);
            sendMsg();
        }
    });
})

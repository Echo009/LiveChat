/*
 * Author : echo0 
 * Email   : ech0.extreme@foxmail.com
 * Time    : 2017年6月16日20:34:54 
 */
package cn.echo0.pojo;

import java.util.logging.Logger;

/**
 * @desc 客户端与服务端之间传送的消息类
 * @author Ech0
 */
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
//    2 : 更新用户列表 +1
//    3 : 更新用户列表 - 1 
//    4 : 初始化用户列表
public class Msg {
    private int  msgType ;
    private String from;
    private String to;
    private String msgContent;
    private boolean containImg ;
    private String timeStamp;
    public int getMsgType() {
        return msgType;
    }

    public void setMsgType(int msgType) {
        this.msgType = msgType;
    }

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public String getMsgContent() {
        return msgContent;
    }

    public void setMsgContent(String msgContent) {
        this.msgContent = msgContent;
    }

    public boolean isContainImg() {
        return containImg;
    }

    public void setContainImg(boolean containImg) {
        this.containImg = containImg;
    }

    public String getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(String timeStamp) {
        this.timeStamp = timeStamp;
    }

    @Override
    public String toString() {
        return "Msg{" + "msgType=" + msgType + ", from=" + from + ", to=" + to + ", msgContent=" + msgContent + ", containImg=" + containImg + ", timeStamp=" + timeStamp + '}';
    }

}

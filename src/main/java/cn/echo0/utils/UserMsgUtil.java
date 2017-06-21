/*
 * Author : echo0 
 * Email   : ech0.extreme@foxmail.com
 * Time    : 2017年6月16日20:28:47 
 * desc 生成更新用户列表的msg
 */
package cn.echo0.utils;

import cn.echo0.pojo.Msg;
import com.google.gson.Gson;

/**
 * @author Ech0
 */
public class UserMsgUtil {
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
//    5 : 窗口抖动

    public static String genMsgJsonString_AddUser(String username) {
        Msg msg = new Msg();
        msg.setMsgType(2);
        msg.setMsgContent(username);
        Gson gson = new Gson();
        return gson.toJson(msg);
    }

    public static String genMsgJsonString_removeUser(String username) {
        Msg msg = new Msg();
        msg.setMsgType(3);
        msg.setMsgContent(username);
        Gson gson = new Gson();
        return gson.toJson(msg);
    }

    public static Msg genMsgBeanByJsonString(String jsonString) {
        Gson gson = new Gson();
        return gson.fromJson(jsonString, Msg.class);
    }

    public static void main(String[] args) {
        String temp = "{\n"
                + "    \"msgType\": 0,\n"
                + "    \"from\": \"username\",\n"
                + "    \"to\": \"username\",\n"
                + "    \"msgContent\": \"This is a simple message from echo0\",\n"
                + "    \"containImg\": true,\n"
                + "    \"timeStamp\": \"2017-06-16T07:30:01.219Z\"\n"
                + "}";
        System.out.println(genMsgBeanByJsonString(temp));
    }
}

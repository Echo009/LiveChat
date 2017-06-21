/*
 * Author : echo0 
 * Email   : ech0.extreme@foxmail.com
 * Time    : 2017年6月11日16:55:34   
 */
package cn.echo0.server;

import cn.echo0.pojo.Msg;
import cn.echo0.utils.UserMsgUtil;
import static cn.echo0.utils.UserMsgUtil.genMsgBeanByJsonString;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Collections;
import java.util.Date;
import java.util.Objects;
import java.util.concurrent.CopyOnWriteArraySet;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;
import org.apache.commons.lang3.StringUtils;

@ServerEndpoint("/server/{userName}")
@SuppressWarnings({"FieldMayBeFinal", "Convert2Diamond", "rawtypes"})
public class Server {

    //这里没有做登录验证 ，因为在前端的jsp页面中验证过了，但是这样会有些问题 ，比如前端可以直接通过 js 利用serverSocket url 来向其他用户发送消息 
    // 可以 在服务器缓存一个userToken ， 通过这个userToken 来判断 该会话是否有效 。
    private static final Object LOCK;
    private static volatile int onlineUserAmount;
    private static CopyOnWriteArraySet<Server> serverSet;
//    private static final int MAX_AMOUNT =20; // 
    private String userName;
    private Session session;
    private static DateFormat df = new SimpleDateFormat("yyyy-MM-dd  hh:mm:ss");

    static {
        LOCK = new Object();
        onlineUserAmount = 0;
        serverSet = new CopyOnWriteArraySet<Server>();
    }

    @OnMessage
    public void onMessage(String message)
            throws IOException, InterruptedException {
        System.out.println("------------------------------------------------------");
        // 构造Msg对象
        Msg msg = genMsgBeanByJsonString(message);
        System.out.println(df.format(new Date()) + "    Received from  " + userName + "      : " + message + "   To  " + msg.getTo());
        if (msg.getMsgType() == 0 || msg.getMsgType() == 5) {//群发类型，或者窗口抖动
            for (Server user : serverSet) {
                if (!this.equals(user)) {
                    user.sendTextMessage(message);
                }
            }
        } else if (msg.getMsgType() == 1) {//转发给某个特定用户
            for (Server user : serverSet) {
                if (msg.getTo().equals(user.getUserName())) {
                    user.sendTextMessage(message);
                }
            }
        }
    }
        @OnOpen
        public void onOpen(@PathParam("userName")String userName, Session session) {//add 
        System.out.println("------------------------------------------------------");
            userName = userName.trim();
            if (StringUtils.isBlank(userName)) {
                this.userName = "Anonymous";
            } else {
                this.userName = userName;
            }
            this.session = session;
            addUser();
            initUserListInfo();
            System.out.println(df.format(new Date()) + "    userName :  " + this.userName + "  join  ~ ");
        }

    

    public void sendTextMessage(String message) {
        System.out.println("sent meeage to  " + this.userName);
        this.session.getAsyncRemote().sendText(message);
    }

    public void initUserListInfo() {
        //发送当前用户列表
        for (Server user : serverSet) {
            sendTextMessage(UserMsgUtil.genMsgJsonString_AddUser(user.getUserName()));
        }
    }

    public void floodUserInfo_Add() {
        for (Server user : serverSet) {
            if (!this.equals(user)) {
                user.sendTextMessage(UserMsgUtil.genMsgJsonString_AddUser(userName));
            }
        }
    }

    public void floodUserInfo_Remove() {
        for (Server user : serverSet) {
            if (!this.equals(user)) {
                user.sendTextMessage(UserMsgUtil.genMsgJsonString_removeUser(userName));
            }
        }
    }

    @OnClose
    public void onClose() {
        System.out.println("------------------------------------------------------");
        removeUser();
        System.out.println(df.format(new Date()) + "   Connection closed");
    }

    @OnError
    public void onError(Throwable t) {
        System.out.println("------------------------------------------------------");
        t.printStackTrace();
        onClose();
    }

    @SuppressWarnings("unchecked")
    private void addUser() {
        synchronized (LOCK) {
            onlineUserAmount++;
            boolean addStatus = serverSet.add(this);
            if (!addStatus) {
                onlineUserAmount--;
                return;
            }
            floodUserInfo_Add();
            System.out.println("add :  " + this.userName);
            System.out.println(df.format(new Date()) + "   current onlineUserAmount :  " + onlineUserAmount);
            printOnlineUserList();
        }
    }

    private void removeUser() {  //remove
        synchronized (LOCK) {
            onlineUserAmount--;
            serverSet.remove(this);
            floodUserInfo_Remove();
            System.out.println(df.format(new Date()) + "   remove :  " + this.userName);
            System.out.println("current onlineUserAmount :  " + onlineUserAmount);
            printOnlineUserList();
        }
    }

    private static void printOnlineUserList() {
        System.out.println("------------------------------------------------------");
        System.out.println(df.format(new Date()) + "   Current Online User List  :");
        for (Server user : serverSet) {
            System.out.print(user.userName + "\t");
        }
        System.out.println("------------------------------------------------------");
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 71 * hash + Objects.hashCode(this.userName);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Server other = (Server) obj;
        return Objects.equals(this.userName, other.userName);
    }

    public String getUserName() {
        return userName;
    }

}

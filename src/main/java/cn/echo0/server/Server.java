/*
 * Author : echo0 
 * Email   : ech0.extreme@foxmail.com
 * Time    : 2017年6月11日16:55:34   
 */
package cn.echo0.server;

import java.io.IOException;
import java.util.concurrent.CopyOnWriteArraySet;
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

    static {
        LOCK = new Object();
        onlineUserAmount = 0;
        serverSet = new CopyOnWriteArraySet<Server>();
    }

    @OnMessage
    public void onMessage(String message)
            throws IOException, InterruptedException {
        System.out.println("------------------------------------------------------");
        System.out.println("Received from  " + userName + "      : " + message);

        for (Server user : serverSet) {
            if (!this.equals(user)) {
                user.sendTextMessage(message);
            }
        }
    }

    @OnOpen
    public void onOpen(@PathParam("userName") String userName, Session session) {//add 
        System.out.println("------------------------------------------------------");
        userName = userName.trim();
        if (StringUtils.isBlank(userName)) {
            this.userName = "Anonymous";
        } else {
            this.userName = userName;
        }
        this.session = session;
        addUser();
        System.out.println("userName :  " + this.userName + "  join  ~ ");

    }

    public void sendTextMessage(String message) {
        System.out.println("sent meeage to  "+ this.userName);
        this.session.getAsyncRemote().sendText(message);
    }

    @OnClose
    public void onClose() {
        System.out.println("------------------------------------------------------");
        removeUser();
        System.out.println("Connection closed");
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
            boolean addStatus= serverSet.add(this);
            if(!addStatus){
                onlineUserAmount--;
            }
            System.out.println("add :  " + this.userName);
            System.out.println("current onlineUserAmount :  " + onlineUserAmount);
            printOnlineUserList() ;
        }
    }

    private void removeUser() {  //remove
        synchronized (LOCK) {
            onlineUserAmount--;
            serverSet.remove(this);
            System.out.println("remove :  " + this.userName);
            System.out.println("current onlineUserAmount :  " + onlineUserAmount);
            printOnlineUserList() ;
        }
    }

    private static void printOnlineUserList() {
        System.out.println("------------------------------------------------------");
        System.out.println("Current Online User List  :");
        for (Server user : serverSet) {
            System.out.print(user.userName + "\t");
        }
        System.out.println("------------------------------------------------------");
    }

}

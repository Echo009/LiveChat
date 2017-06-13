<%-- 
    Document   : chat
    Created on : Jun 13, 2017, 4:39:48 PM
    Author     : Ech0
--%>

<%@page import="cn.echo0.common.Const"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title> Online-Chat </title>
        <link rel="stylesheet" href="<%=request.getContextPath()%>/css/chat.css" type="text/css">
        <script type="text/javascript" src="<%=request.getContextPath()%>/js/jquery.min.js"></script>
    </head>
    <%
//        //is login ? 
//        if (session.getAttribute(Const.LOGIN) == null) { // has not Login , goto login page 
//            response.sendRedirect(request.getContextPath() + "/index.jsp");
//        }
//        boolean hasLogin = (Boolean) session.getAttribute(Const.LOGIN);
//        if (!hasLogin) { // has not Login , goto login page 
//            response.sendRedirect(request.getContextPath() + "/index.jsp");
//        }
    %>
    <body>
        <div id="container">
            <div id="header">
                <img id="headImg" src="<%=request.getContextPath()%>/img/default.jpg">
                <div id="personalNote"> Nothing on You ~ </div>
            </div>
            <div id="content">
                <div id="message"></div>
                <div id="userPanel">
                    <div id="userBanner">当前在线用户数：</div>
                    <div id="userList"></div>
                </div>
            </div>
            <div id="buttonPanel">
                <div id="emojiButton"><img class="functionButton" src="<%=request.getContextPath()%>/img/emoji.png"></div>
                <div id="pictureButton"><img class="functionButton" src="<%=request.getContextPath()%>/img/img.png"></div>
            </div>
            <div id="footer">
                <div id="msgInput" contentEditable="true"></div>
                <div id="sendButton"><img class="functionButton" src="<%=request.getContextPath()%>/img/send.png"></div>
            </div>

        </div>
        <a id="logo" href="http://echo0.cn">Echo0<span id="logoDot">.</span>cn</a>
    </body>
</html>

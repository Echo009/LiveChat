<%-- 
    Document   : chat
    Created on : Jun 13, 2017, 4:39:48 PM
    Author     : Ech0
--%>

<%@page import="cn.echo0.common.Const"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ page errorPage="../jsp/headleError/goToLogin.jsp" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title> Online-Chat </title>
        <link rel="stylesheet" href="<%=request.getContextPath()%>/css/chat.css" type="text/css">
        <script type="text/javascript" src="<%=request.getContextPath()%>/lib/jquery.min.js"></script>
        <link rel="stylesheet" href="<%=request.getContextPath()%>/lib/custom-scrollbar/jquery.mCustomScrollbar.css" />
        <script type="text/javascript" src="<%=request.getContextPath()%>/lib/custom-scrollbar/jquery.mCustomScrollbar.concat.min.js"></script>

    </head>
    <%@include file="./segment/checkLoginStatus.jsp" %>
    <!--provider currentUser-->
    <body>
        <div id="container">
            <div id="header">
                <img id="headImg" src="<%=request.getContextPath()%>/img/default.jpg">
                <div id="user-desc-wrapper">
                    <div id='user-name'><%=currentUser.getUsername()%></div>
                    <div id="user-personalNote"> Nothing on You ~ </div>
                </div>
            </div>
            <div id="content">
                <div id="message">
                    <div class="message-own-warpper">
                        <div  class="message-content-own">喂喂喂，你开心吗？<img class='emoji' src='../img/phiz/22.png'/> <br><br><br><br><br><img class='emoji' src='../img/phiz/22.png'/> </div>
                        <div class="message-username">Echo0</div>
                        <img class="message-headImg-own" src="<%=request.getContextPath()%>/img/headImg/default.jpg"/>
                    </div>
                    <div class="message-other-warpper">
                        <img class="message-headImg-other" src="<%=request.getContextPath()%>/img/headImg/default.jpg"/>
                        <div class="message-username">Anonymous</div>
                        <div  class="message-content-other">mdzz ！<img class='emoji' src='../img/phiz/22.png'/> <br><br><br><br><br><img class='emoji' src='../img/phiz/32.png'/> </div>
                    </div>
                </div>
                <div id="userPanel">
                    <div id="userBanner">当前在线用户数：<span id="onlineUserAmount">0</span></div>
                    <div id="userList">
                    </div>
                </div>
            </div>

            <div id="buttonPanel">
                <div id="emojiWrapper"></div>
                <div id="emojiButton"><img class="functionButton" onclick="emoji()" src="<%=request.getContextPath()%>/img/button/emoji.png"></div>
                <div id="pictureButton"><img class="functionButton" src="<%=request.getContextPath()%>/img/button/img.png"></div>
            </div>
            <div id="footer">
                <div id="msgInput" contentEditable="true"></div>
                <div id="sendButton"><img class="functionButton" onclick="sendMsg()" src="<%=request.getContextPath()%>/img/button/send.png"></div>
            </div>
            <div id="emojiWrapper"></div>
        </div>
        <a id="logo" href="http://echo0.cn">Echo0<span id="logoDot">.</span>cn</a>
        <%@include file="./segment/effects.jsp" %>
        <script type="text/javascript" src="<%=request.getContextPath()%>/js/handleMsg/encapsulateMsg.js"></script>
        <script type="text/javascript" src="<%=request.getContextPath()%>/js/functions/userPanelFunctions.js"></script>
        <script type="text/javascript" src="<%=request.getContextPath()%>/js/client/socketClient.js"></script>
        <script type="text/javascript" src="<%=request.getContextPath()%>/js/functions/buttonFunction.js"></script>
    </body>
</html>

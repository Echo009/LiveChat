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
        <link rel="stylesheet" href="<%=request.getContextPath()%>/lib/custom-scrollbar/jquery.mCustomScrollbar.css" />
        <script type="text/javascript" src="<%=request.getContextPath()%>/lib/custom-scrollbar/jquery.mCustomScrollbar.concat.min.js"></script>

    </head>
    <%--<%@include file="./segment/checkLoginStatus.jsp" %>--%>

    <body>
        <div id="container">
            <div id="header">
                <img id="headImg" src="<%=request.getContextPath()%>/img/default.jpg">
                <div id="personalNote"> Nothing on You ~ </div>
            </div>
            <div id="content">
                <div id="message">
                    <div class="message-own-warpper">
                        <div  class="message-content-own">你开心吗？<img class='emoji' src='../img/phiz/22.png'/> <br><br><br><br><br><img class='emoji' src='../img/phiz/22.png'/> </div>
                        <img class="message-headImg-own" src="<%=request.getContextPath()%>/img/headImg/echo.jpg"/>
                    </div>
                    <div class="message-own-warpper">
                        <div  class="message-content-own">你开心吗？<img class='emoji' src='../img/phiz/22.png'/> <br><br><br><br><br><img class='emoji' src='../img/phiz/22.png'/> </div>
                        <img class="message-headImg-own" src="<%=request.getContextPath()%>/img/headImg/echo.jpg"/>
                    </div>
                    <div class="message-other-warpper">
                        <img class="message-headImg-other" src="<%=request.getContextPath()%>/img/headImg/echo.jpg"/>
                        <div  class="message-content-other">你猜啊！<img class='emoji' src='../img/phiz/22.png'/> <br><br><br><br><br><img class='emoji' src='../img/phiz/22.png'/> </div>
                    </div>


                </div>
                <div id="userPanel">
                    <div id="userBanner">当前在线用户数：<span id="onlineUserAmount">1</span></div>
                    <div id="userList">
                        <div id="user-username"  class="user">
                            <img class="user-headImg" src="<%=request.getContextPath()%>/img/headImg/echo.jpg">
                            <div class="username">Echo0</div>
                        </div>
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
        <%--<%@include file="./segment/effects.jsp" %>--%>
        <script type="text/javascript" src="<%=request.getContextPath()%>/js/buttonFunction.js"></script>
    </body>
</html>

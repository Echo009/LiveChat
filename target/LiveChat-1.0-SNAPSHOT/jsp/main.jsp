
<%--  
        desc : main page  
        time : 2017年6月12日20:25:44
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ page errorPage="../jsp/headleError/goToLogin.jsp" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="<%=request.getContextPath()%>/css/mainPageStyle.css" type="text/css">
        <title>Main </title>
    </head>
    <%@include file="./segment/checkLoginStatus.jsp" %>
    <body>
        <div class="panel">
            <div >
                <img class="headImg" src="<%=request.getContextPath()%>/img/default.jpg"> 
            </div>
            <hr>
            <div class="content">
                <div class="word" >
                    Welcome ! <%=currentUser == null ? "Void" : currentUser.getUsername()%> 
                </div>
                <div class="space"></div>
                <div class="space"></div>
                <div class="word" >
                    愿意用一支黑色铅笔 
                </div>
                <div class="space"></div>
                <div class="word" >
                    画一出沉默舞台剧 
                </div>
                <div class="space"></div>
                <div class="word" >
                    灯光再亮也抱住你  
                </div>
                <div class="space"></div>
                <div class="word" >
                    愿意在角落唱沙哑的歌
                </div>
                <div class="space"></div>
                <div class="word" >
                    再大声也都是给你
                </div>
                <div class="space"></div>
                <div class="word" >
                    请用心听，不要说话
                </div>
                <div class="space"></div>
                <div class="logoff" >
                    <input type="button" value ="Log0FF" id="logoff" onclick="location.href = '<%=request.getContextPath()%>/doLogoff'">
                </div>
                <a href='<%=request.getContextPath()%>/jsp/chat.jsp'>to Chat</a>
            </div>
        </div>
        <script type="text/javascript" src="<%=request.getContextPath()%>/lib/jquery.min.js"></script>
         <%@include file="./segment/effects.jsp" %>
        <a id="logo" href="http://echo0.cn">Echo0<span id="logoDot">.</span>cn</a>
    </body>
</html>

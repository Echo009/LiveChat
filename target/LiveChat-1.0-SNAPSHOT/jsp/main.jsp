
<%@page import="cn.echo0.common.Const"%>
<%@page import="cn.echo0.pojo.User"%>
<%@page import="java.util.Random"%>
<%--  
        desc : main page  
        time : 2017年6月12日20:25:44
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="<%=request.getContextPath()%>/css/mainPageStyle.css" type="text/css">
        <meta http-equiv="refresh" content="60">
        <%
            if (session.getAttribute(Const.LOGIN) == null) { // has not Login , goto login page 
                response.sendRedirect(request.getContextPath() + "/index.jsp");
            }
            boolean hasLogin = (Boolean) session.getAttribute(Const.LOGIN);
            if (!hasLogin) { // has not Login , goto login page 
                response.sendRedirect(request.getContextPath() + "/index.jsp");
            }
            User currentUser = (User) session.getAttribute(Const.CURRENT_USER);
        %>
        <title>Main </title>
    </head>

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
            </div>
        </div>
        <script type="text/javascript" src="<%=request.getContextPath()%>/js/jquery.min.js"></script>
        <script type="text/javascript" src="<%=request.getContextPath()%>/js/snow.js"></script>
    </body>
</html>

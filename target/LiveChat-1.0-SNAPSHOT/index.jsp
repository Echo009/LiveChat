<%@page import="cn.echo0.common.Const"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%-- 
    Document   : index
    Created on : 2017年6月13日13:14:32
    Author     : Ech0
--%>

<%@page import="java.util.Random"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link rel="stylesheet" href="<%=request.getContextPath()%>/css/style.css" type="text/css">
    <script type="text/javascript" src="<%=request.getContextPath()%>/lib/jquery.min.js"></script>
    <script type="text/javascript" src="<%=request.getContextPath()%>/js/functions/verify.js"></script>

    <meta http-equiv="refresh" content="180">
    <%@page  import="cn.echo0.utils.VerifyCodeUtil" %>
    <title>Login </title>

    <%!
        String authCode;
        String username = "";
        String password = "";
    %>
    <%
        authCode = VerifyCodeUtil.generateVerifyCode(4, null).toLowerCase();
        // initialize the hasLogin in the session
        session.setMaxInactiveInterval(60 * 10);
        if (session.getAttribute(Const.LOGIN) == null) {
            session.setAttribute(Const.LOGIN, false);
        } else {
            boolean hasLogin = (Boolean) session.getAttribute(Const.LOGIN);
            if (hasLogin) { // has login  goto main page 
                response.sendRedirect(request.getContextPath() + "/jsp/main.jsp");
            }
        }
        Cookie[] cookies = request.getCookies();
        if (cookies != null && cookies.length != 0) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals("username")) {
                    username = cookie.getValue();
                } else if (cookie.getName().equals("password")) {
                    password = cookie.getValue();
                }
            }
        }
    %>
    <body>
        <div class="panel">
            <div >
                <img class="headline" src="<%=request.getContextPath()%>/img/login_1.png"> 
            </div>
            <hr>
            <div class="content">
                <form id="input"  method="post" action="<%=request.getContextPath()%>/doLogin" >
                    <input type="hidden" name="hasError" value="<%=session.getAttribute(Const.STATUS)%>">

                    <input type="hidden" name="correctCode" value="<%=authCode%>">
                    <table align="center"  >
                        <div class="space"></div>
                        <tr>
                            <td>
                                Username ：
                            </td>
                            <td>
                                <input type="text" value="<%=username%>" name="username" onkeyup="value = value.replace(/[^\w\.\/\@]/g, '')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\w\.\/]/g,''))" placeholder="邮箱或者手机号 ">
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Password ：
                            </td>
                            <td>
                                <input type="password" name="password" value="<%=password%>"  placeholder="密码 ">
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 30%">
                                <input type="text" name="authCode"  placeholder="验证码" >
                            </td>
                            <td class="hint" style="text-align: left; " valign="middle">
                                <img class="authCode" src="<%=request.getContextPath()%>/VerifyCode?code=<%=authCode%>"onclick="reloadCode()">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2"  style="text-align: left ;padding-bottom: 10px" onclick="select()" >
                                <input  style=" width: 15px  ; height: 15px ; " type="checkbox" checked="checked" name="rememberPsw" value="rememberPsw" />       Remember  My  Password 
                            </td>  
                        </tr>
                        <tr>
                            <td><input type="reset" id="reset"> </td>  
                            <td><input type="button" id="submit1" value="Login" onclick="checkInput()"></td>
                        </tr>
                        <tr><td colspan="2" style="text-align: right"><a href='<%=request.getContextPath()%>/jsp/logon.jsp'>Logon</a></td></tr>

                    </table>
                </form>
                <%
                    session.setAttribute(Const.STATUS, 0); //Guaranteed to handle this error only once
                %>
            </div>
        </div>
             <a id="logo" href="http://echo0.cn">Echo0<span id="logoDot">.</span>cn</a>
        <script src="<%=request.getContextPath()%>/js/functions/prompt.js"></script>
    </body>
</html>

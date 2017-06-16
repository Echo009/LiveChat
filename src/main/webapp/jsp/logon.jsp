<%-- 
    Document   : logon
    Created on : Jun 12, 2017, 8:44:17 PM
    Author     : Ech0
--%>
<%@page import="org.apache.commons.lang3.StringUtils"%>
<%@page import="cn.echo0.pojo.User"%>
<%@page import="cn.echo0.common.Const"%>
<%@page import="java.util.Random"%>
<%@page  import="cn.echo0.utils.VerifyCodeUtil" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link rel="stylesheet" href="<%=request.getContextPath()%>/css/style.css" type="text/css">
    <script type="text/javascript" src="<%=request.getContextPath()%>/lib/jquery.min.js"></script>
    <script type="text/javascript" src="<%=request.getContextPath()%>/js/functions/verify.js"></script>
    <%
        boolean hasLogin = (Boolean) session.getAttribute(Const.LOGIN);
        if (hasLogin) { // has login  goto main page 
            response.sendRedirect(request.getContextPath() + "/jsp/main.jsp");
        }
        String authCode = VerifyCodeUtil.generateVerifyCode(4, null).toLowerCase();
        User user = (User) session.getAttribute(Const.CURRENT_USER);
        if (user == null) {
            user = new User();
        }
    %>
    <title>Logon </title>
    <body>
        <div class="panel">
            <div >
                <img class="headline" src="<%=request.getContextPath()%>/img/logon.png"> 
            </div>
            <hr>
            <div class="content">
                <form id="input"  method="post" action="<%=request.getContextPath()%>/doLogon" >
                    <input type="hidden" name="hasError" value="<%=session.getAttribute(Const.STATUS)%>">
                    <input type="hidden" name="correctCode" value="<%=authCode%>">
                    <table align="center"  >
                        <div class="space"></div>
                        <tr>
                            <td>
                                Username ：
                            </td>
                            <td>
                                <input id="username" type="text" name="username" value="<%=StringUtils.isBlank(user.getUsername()) ? "" : user.getUsername()%>" onkeyup="value = value.replace(/[^\w\.\/\@]/g, '')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\w\.\/]/g,''))" placeholder="用户名 ">
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Password ：
                            </td>
                            <td>
                                <input  id="password" type="password" name="password"  value="<%=StringUtils.isBlank(user.getPassword()) ? "" : user.getPassword()%>"  placeholder="密码 ">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Sex
                            </td>
                            <td>
                                <input  id="sex" type="text" name="sex" value="<%=user.getSex() == null ? "" : new String(user.getSex().getBytes("utf-8"), "utf-8")%>" placeholder="性别 ">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Age
                            </td>
                            <td>
                                <input  id="age" type="text" name="age" value="<%=user.getAge() == 0 ? "" : user.getAge()%>" onkeyup="value = value.replace( ^ [0 - 9] * $, '')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\w\.\/]/g,''))" placeholder="年龄 ">
                            </td>
                        </tr>
                        </tr>
                        <tr>
                            <td>
                                Email
                            </td>
                            <td>
                                <input    id="email" type="text" name="email" value="<%=StringUtils.isBlank(user.getEmail()) ? "" : user.getEmail()%>" onkeyup="value = value.replace(/[^\w\.\/\@]/g, '')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\w\.\/]/g,''))" placeholder="邮箱 ">
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 30%">
                                <input type="text" name="authCode"  placeholder="验证码">
                            </td>
                            <td class="hint" style="text-align: left; " valign="middle">
                                <img class="authCode" src="<%=request.getContextPath()%>/VerifyCode?code=<%=authCode%>" onclick="reloadCode()">
                            </td>
                        </tr>
                        <tr>
                            <td><input type="button" id="reset" value="reset" onclick="clean()"> </td>  
                            <td><input type="button" id="submit1" value="Logon" onclick="checkInput()"></td>
                        </tr>
                        <tr><td colspan="2" style="text-align: right"><a href='<%=request.getContextPath()%>''>Return</a></td></tr>
                    </table>
                </form>
                <%
                    session.setAttribute(Const.STATUS, 0); //Guaranteed to handle this error only once
%>
            </div>
        </div>
             <a id="logo" href="http://echo0.cn">Echo0<span id="logoDot">.</span>cn</a>
        <script src="<%=request.getContextPath()%>/js/functions/prompt.js"></script>
        <script type="text/javascript">
                               
        </script>
    </body>
</html>

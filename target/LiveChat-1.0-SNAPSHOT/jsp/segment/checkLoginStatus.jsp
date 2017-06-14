<%-- 
    Document   : checkLoginStatus
    Created on : Jun 14, 2017, 1:22:53 PM
    Author     : Ech0
--%>
<!--provide currentUser-->
<%@page import="cn.echo0.pojo.User"%>
<%@page import="cn.echo0.common.Const"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    if (session.getAttribute(Const.LOGIN) == null) { // has not Login , goto login page 
        response.sendRedirect(request.getContextPath() + "/index.jsp");
    }
    boolean hasLogin = (Boolean) session.getAttribute(Const.LOGIN);
    User currentUser = (User) session.getAttribute(Const.CURRENT_USER);
    if (!hasLogin || currentUser == null) { // has not Login , goto login page 
        response.sendRedirect(request.getContextPath() + "/index.jsp");
    }
%>

<%-- 
    Document   : effects
    Created on : Jun 14, 2017, 12:30:20 PM
    Author     : Ech0
--%>

<%@page import="java.util.regex.Pattern"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!--to Lan-->
<!--need currentUser  (User)-->

<%
    if (currentUser != null) {
        Pattern pattern = Pattern.compile("^((?!Lan).)*$");
        if (("Echo0").equals(currentUser.getUsername()) //contain echo0
                || !(pattern.matcher(currentUser.getUsername()).matches())) { //contain lan
            out.print("<script type='text/javascript' src='" + request.getContextPath() + "/js/animates/heart.js'></script>");
            out.print("<script type='text/javascript' src='" + request.getContextPath() + "/js/toLan/forLan.js'></script>");
        } else {
            out.print("<script type='text/javascript' src='" + request.getContextPath() + "/js/animates/snow.js'></script>");
        }
    }
%>
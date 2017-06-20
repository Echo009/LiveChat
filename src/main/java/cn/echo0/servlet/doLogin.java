/*
 * Author : echo0 
 * Email   : ech0.extreme@foxmail.com
 * Time   :  2017年6月12日19:54:26
 */
package cn.echo0.servlet;

import cn.echo0.common.Const;
import cn.echo0.dao.UserDao;
import cn.echo0.pojo.User;
import cn.echo0.utils.ServletBeanUtil;
import cn.echo0.utils.UserUtil;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * attr: user , error , hasLogin
 * @author Ech0
 */

@WebServlet(name = "doLogin",urlPatterns = {"/doLogin"})
public class doLogin extends HttpServlet {
    private static final long serialVersionUID = 1L;
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        User user = new User();
        ServletBeanUtil.populate(user, request);

        String[] remember = request.getParameterValues("rememberPsw");
        if (remember != null && remember.length != 0) { //remember the info 
            Cookie cookie1 = new Cookie("username", user.getUsername());
            Cookie cookie2 = new Cookie("password", user.getPassword());
            cookie1.setMaxAge(432000);
            cookie1.setPath("/");
            cookie2.setMaxAge(432000);
            cookie2.setPath("/");
            response.addCookie(cookie1);
            response.addCookie(cookie2);
        } else {
            Cookie[] cookies = request.getCookies();
            if (cookies != null && cookies.length != 0) {
                for (Cookie cookie : cookies) {

                    if (cookie.getName().equals("username") || cookie.getName().equals("password")) {
                        cookie.setValue("");
                        cookie.setMaxAge(0);
                        response.addCookie(cookie);
                    }
                }

            }
        }
        HttpSession session = request.getSession();
        if (!UserDao.verifyUser(user)) {// fail to verify
            session.setAttribute(Const.STATUS, 1);// account error or password error 
            response.sendRedirect(request.getContextPath() + "/index.jsp"); // redo login 
        } else {
            UserUtil.trimUser(user);
            session.setAttribute(Const.CURRENT_USER, user);
            session.setAttribute(Const.LOGIN, true);
            response.sendRedirect(request.getContextPath() + "/jsp/main.jsp");
        }
    }
}

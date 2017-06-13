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
import java.io.PrintStream;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.apache.commons.lang3.StringUtils;

/**
 * attr: currentUser , status , login
 *
 * @author Ech0
 */
@WebServlet(name = "doLogon", urlPatterns = {"/doLogon"})
@SuppressWarnings("serial")
public class doLogon extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("doing logon");
        HttpSession session = request.getSession();
        User user = new User();
        ServletBeanUtil.populate(user, request);
        System.out.println(user);

        if (StringUtils.isBlank(user.getUsername()) || StringUtils.isBlank(user.getPassword())) {
            PrintStream ps = new PrintStream(response.getOutputStream());
            ps.print("username or password is necessary !");
            System.out.println("username or password is necessary !");
            ps.flush();
            ps.close();
            return;
        }
        if (UserDao.checkUsername(user.getUsername())) {
            PrintStream ps = new PrintStream(response.getOutputStream());
            System.out.println("username is already used !");
            session.setAttribute(Const.CURRENT_USER, user);
            session.setAttribute(Const.LOGIN, false);
            session.setAttribute(Const.STATUS, 2); //username is already used !
            response.sendRedirect(request.getContextPath() + "/jsp/logon.jsp");
            return;
        }
        UserDao.addUser(user);
        UserUtil.trimUser(user);
        session.setAttribute(Const.CURRENT_USER, user);
        System.out.println("add user :" + user.getUsername() + "  p :" + user.getPassword());
        session.setAttribute(Const.LOGIN, false);
        session.setAttribute(Const.STATUS, 3);// logon successfully
        response.sendRedirect(request.getContextPath());
    }
}

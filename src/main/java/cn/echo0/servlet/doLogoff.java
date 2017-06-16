/*
 * Author : echo0 
 * Email   : ech0.extreme@foxmail.com
 * Time   :  2017年6月12日19:54:26
 */
package cn.echo0.servlet;

import cn.echo0.common.Const;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * attr: user , error , hasLogin
 *
 * @author Ech0
 */

@WebServlet(name = "doLogoff",urlPatterns = {"/doLogoff"})
public class doLogoff extends HttpServlet {

    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
            session.invalidate();
            response.sendRedirect(request.getContextPath() + "/index.jsp"); // redo login 
        }
    
}

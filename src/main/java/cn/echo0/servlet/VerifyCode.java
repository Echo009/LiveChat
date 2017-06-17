package cn.echo0.servlet;

/*
 * Author : echo0 
 * Email   : ech0.extreme@foxmail.com
 * desc 用servlet处理验证码请求
 */
import cn.echo0.utils.VerifyCodeUtil;
import java.io.IOException;
import java.io.OutputStream;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author Ech0
 */
@WebServlet(name = "verifyCode",urlPatterns = {"/VerifyCode"})
public class VerifyCode extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            
            throws ServletException, IOException {
        String authCode = request.getParameter("code");
        byte[] imgData = VerifyCodeUtil.getVerifyImageBinaryData(200, 80, authCode);
        response.setStatus(200);
        response.setContentType("image/jpeg");
        OutputStream outs = response.getOutputStream();
        outs.write(imgData);
        outs.flush();
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        doGet(request, response);
    }

}

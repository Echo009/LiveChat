/*
 * Author : echo0 
 * Email   : ech0.extreme@foxmail.com
 * Time    : 2017年6月12日14:38:05
 */
package cn.echo0.dao;

import cn.echo0.common.DBConfig;
import cn.echo0.pojo.User;
import cn.echo0.utils.MD5Util;
import cn.echo0.utils.PrintResultSet;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.apache.commons.dbcp2.BasicDataSource;

/**
 *
 * @author Ech0
 */
public class UserDao { // use  dbcp

    static final BasicDataSource DS;
    
    static {
        DS = new BasicDataSource();
        DS.setDriverClassName(DBConfig.DRIVER);
        DS.setUrl(DBConfig.REMOTE_URL);
        DS.setUsername(DBConfig.REMOTE_USERNAME);
        DS.setPassword(DBConfig.REMOTE_PASSWORD);
        DS.setInitialSize(5);
        DS.setMaxTotal(30);
        DS.setMinIdle(2);
    }
    
    public static boolean addUser(User user) {
        String sql = "insert into  " + DBConfig.TABLE_NAME
                + " values(?,?,?,?,?) ";
        try (Connection conn = DS.getConnection();
                PreparedStatement psmt = conn.prepareStatement(sql);) {
            psmt.setString(1, user.getUsername());
            psmt.setString(2, MD5Util.MD5EncodeUtf8(user.getPassword()));
            psmt.setString(3, user.getSex());
            psmt.setInt(4, user.getAge());
            psmt.setString(5, user.getEmail());
            return psmt.executeUpdate()>0;
        } catch (SQLException ex) {
            Logger.getLogger(UserDao.class.getName()).log(Level.SEVERE, null, ex);
            return false;
        }
    }
    
    public static boolean verifyUser(User user) {
        String whereClause = " where username = ? and password = ? ";
        try (Connection conn = DS.getConnection();
                PreparedStatement psmt = conn.prepareStatement("select username from " + DBConfig.TABLE_NAME + whereClause);) {
            psmt.setString(1, user.getUsername());
            psmt.setString(2, MD5Util.MD5EncodeUtf8(user.getPassword()));
            try (ResultSet rs = psmt.executeQuery()) {
                if (!rs.next()) {
                    return false;
                }
            }
        } catch (SQLException ex) {
            Logger.getLogger(UserDao.class.getName()).log(Level.SEVERE, null, ex);
            return false;
        }
        return true;
    }
    
    public static boolean checkUsername(String username) {
        String whereClause = " where username = ?";
        try (Connection conn = DS.getConnection();
                PreparedStatement psmt = conn.prepareStatement("select username from " + DBConfig.TABLE_NAME + whereClause);) {
            psmt.setString(1, username);
            try (ResultSet rs = psmt.executeQuery()) {
                if (!rs.next()) {
                    return false;
                }
            }
        } catch (SQLException ex) {
            Logger.getLogger(UserDao.class.getName()).log(Level.SEVERE, null, ex);
            return false;
        }
        return true;
    }
//    
//    public static void main(String[] args) throws SQLException {
//////        System.out.println(checkUsername("Echo0"));
//////        Connection conn = DS.getConnection();
//////        PreparedStatement psmt = conn.prepareStatement("select * from " + DBConfig.TABLE_NAME);
//////        ResultSet rs = psmt.executeQuery();
//////        PrintResultSet.printResultSet(rs);
//        User user = new User();
//        user.setUsername("Lan");
//        user.setPassword("ironman");
////        System.out.println(verifyUser(user));
//        System.out.println(addUser(user));
//    }
}

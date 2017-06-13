/*
 * Author : echo0 
 * Email   : ech0.extreme@foxmail.com
 * Time    :2017年6月13日09:09:24
 */
package cn.echo0.utils;

import cn.echo0.pojo.User;

/**
 *
 * @author Ech0
 */
public class UserUtil {
    public static void trimUser(User user){
        user.setPassword("Null");
    }
}

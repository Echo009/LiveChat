/*
 * Author : echo0 
 * Email   : ech0.extreme@foxmail.com
 * Time   : 2017年6月12日14:42:57
 */
package cn.echo0.common;

import cn.echo0.utils.PropertiesUtil;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Properties;

/**
 *
 * @author Ech0
 */
public class DBConfig {
    
    public static final String DRIVER;
    public static final String REMOTE_URL;
    public static final String REMOTE_USERNAME;
    public static final String REMOTE_PASSWORD;
    public static final String LOCAL_URL;
    public static final String LOCAL_USERNAME;
    public static final String LOCAL_PASSWORD;
    public static final String TABLE_NAME;
    
    static { //init 
            DRIVER = PropertiesUtil.getProperty("driver");
            REMOTE_URL=PropertiesUtil.getProperty("remote.url")+PropertiesUtil.getProperty("url.suffix");
            REMOTE_USERNAME=PropertiesUtil.getProperty("remote.username");
            REMOTE_PASSWORD=PropertiesUtil.getProperty("remote.password");
            
            LOCAL_URL=PropertiesUtil.getProperty("local.url")+PropertiesUtil.getProperty("url.suffix");
            LOCAL_USERNAME=PropertiesUtil.getProperty("local.username");
            LOCAL_PASSWORD=PropertiesUtil.getProperty("local.password");
            
            TABLE_NAME=PropertiesUtil.getProperty("tableName");
            
    }

}


import cn.echo0.common.DBConfig;

/*
 * Author : echo0 
 * Email   : ech0.extreme@foxmail.com
 * 
 */

/**
 *
 * @author Ech0
 */
public class DbConfigTest {
    public static void main(String[] args) {
        
        
        System.out.println(DBConfig.DRIVER);
        System.out.println(DBConfig.LOCAL_PASSWORD);
        System.out.println(DBConfig.LOCAL_USERNAME);
        System.out.println(DBConfig.LOCAL_URL);
        
        System.out.println(DBConfig.REMOTE_USERNAME);
        System.out.println(DBConfig.REMOTE_PASSWORD);
        System.out.println(DBConfig.REMOTE_URL);
        
        
        System.out.println(DBConfig.TABLE_NAME);
        
    }
}

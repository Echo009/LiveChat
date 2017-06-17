/*
 * Author : echo0 
 * Email   : ech0.extreme@foxmail.com
 * Time    :  2017年4月27日14:31:01
 */
package cn.echo0.utils;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

/**
 * @author Ech0
 */
public class PrintResultSet {

    public static void printResultSet(ResultSet rs) throws SQLException {
        ResultSetMetaData rsmd = rs.getMetaData();
        int colNum = rsmd.getColumnCount();
        boolean printHead = false;
        while (rs.next()) {  //输出效果并不理想 。 还需要优化输出格式 。
            if (!printHead) {//print table head info 
                for (int i = 1; i <= colNum; i++) {
                    System.out.print(formatString(rsmd.getColumnName(i) )+ "    \t");
                }
                System.out.println("");
                printHead = true;
            }
            for (int i = 1; i <= colNum; i++) {
                if(rs.getObject(i)!=null)
                System.out.print(formatString(rs.getObject(i).toString()) + "    \t");
                else
                    System.out.print(formatString("NULL") + "    \t");
            }
            System.out.println("");

        }
        rs.beforeFirst(); // reset 
    }

    private static String formatString(String str) {//fix the length of string  = 14
        // length <= 14 
        StringBuilder resultBuilder = new StringBuilder(14);
        int len = str.length();
        if (len < 14) {
            int padding = 14 - len;
            resultBuilder.append(str);
            for (int i = 0; i < padding; i++) {
                resultBuilder.append(' ');
            }
            return new String(resultBuilder);
        } else if (len > 14) {
            resultBuilder.append(str.substring(0, 10));
            resultBuilder.append("...");
            return new String(resultBuilder);
        } else {
            return str;
        }
    }
}

//最开始写这个方法的思路是通过ResultSet得到ResultSetMetaData对象，通过ResultSetMetaData对象 分析ResultSet的结构，
//分析每列的数据类型，将其转换成对应的类型 再输出 。
//后来发现没有必要，因为要实现的仅仅只是输出相应的信息 。并没有涉及到数据的操作 。
//在不知道ResultSet结构的情况下 ，要将ResultSet中的信息打印出来 ，仅需要一个总列数即可 。
//直接用.getObject(int column);方法得到Object对象 ，再直接输出即可 。 
//输出方法会调用运行时类型的toString方法  。

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cn.echo0.utils;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 *
 * @author Ech0
 */
public class Collections {

    public static void printCollectionsOrMap(Object object) {
        if (object instanceof Collection) { // collection 
            if (object instanceof ArrayList) { // do not handle vector 
                ArrayList list = (ArrayList) object;
                for (int i = 0; i < list.size(); i++) {
                    System.out.print(list.get(i) + "\t");
                }
                System.out.println("");
            } else if (object instanceof List) {
                List list = (List) object;
                for (Iterator iterator = list.iterator(); iterator.hasNext();) {
                    Object next = iterator.next();
                    System.out.print(next + "\t");
                }
                System.out.println("");
            } else {
                Set set = (Set) object;
                for (Object object1 : set) {
                    System.out.print(object1 + "\t");
                }
                System.out.println("");
            }
            return;
        } else if (object instanceof Map) {
            Map map = (Map) object;
            for (Iterator iterator = map.keySet().iterator(); iterator.hasNext();) {
                Object next = iterator.next();
                System.out.print(map.get(next) + " \t");
            }
            System.out.println("");
            return;
        }
        System.out.println(" can not print this object ! ");
    }
}

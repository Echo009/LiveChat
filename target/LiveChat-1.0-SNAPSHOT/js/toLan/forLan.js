/* 
 * Author : echo0 
 * Email   : ech0.extreme@foxmail.com
 * Time    : 2017年6月16日17:29:56 
 */

// to Lan  
// QAQ 
//independent

//#user-name
//#headImg
$(function (){
    //setHeadImg
    var username = $("#user-name").text();
    var $headImg = $("#headImg");
    if(username=="Lan"||username=="Echo0"){
        var url = "../img/headImg/" + username +".jpg";
        $headImg.attr("src",url);
    }
    if(username=="Lan"){
        $("#Echo0ToLan").velocity("fadeIn",{duration:3000});
    }
});


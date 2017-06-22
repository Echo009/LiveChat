/* 
 * Author : echo0 
 * Email   : ech0.extreme@foxmail.com
 * Time    :   2017年6月13日11:05:21
 */

// status : 1,2,3
(function () {
    var form = document.getElementById("input");
    if (form.hasError.value == 0) {
        return;
    }
    if (form.hasError.value == 1) {
        say('Incorrect Account or Password');
    } else if (form.hasError.value == 2) {
        say('username is already used !');
    } else if (form.hasError.value == 3) {
        say('logon successfully !');
    }
})();

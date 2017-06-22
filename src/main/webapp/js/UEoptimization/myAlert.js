/* 
 * Author : echo0 
 * Email   : ech0.extreme@foxmail.com
 * Time    : 2017-6-22 10:25:31
 */

function say(words, img, time) {
    swal(
            {
                title:words,
                imageUrl: img,
                timer: time||1719,
                showConfirmButton: false
            }
    );
}


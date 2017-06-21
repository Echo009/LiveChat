/* 
 * Author : echo0 
 * Email   : ech0.extreme@foxmail.com
 * Time    : 2017年6月20日21:08:18
 */
// need velocity , ui 
// blast.js
// some animations
// 
// 
//#user-personalNote
//$("#user-personalNote").blast({delimiter: "character"})
//        .css("opacity", 0)
//        .velocity("transition.perspectiveDownIn", {stagger: 150, drag: true, complete: function () {
//                $(this).velocity("transition.perspectiveDownOut", {stagger: 150, drag: true, backwards: true});
//            }
//        })
$(function () {
    setInterval(function () {
//#user-personalNote
        $("#user-personalNote").blast({delimiter: "character"})
                .css("opacity", 0)
                .velocity("transition.slideRightIn", {stagger: 150, drag: true});
    }, 7719);
});
//    left: 50%;
//    top: 50%;
//    transform: translate(-50%,-50%);
var Animations = {
    shake_container: {
        p: {
            left: "50.5%",
            transform: "translate( - 50.5 %  )"
        },
        o: {
            loop: 8,
            duration: 21.9
        }
    }
};
function shakeWindow() {
    $("#container").velocity(Animations.shake_container);
}

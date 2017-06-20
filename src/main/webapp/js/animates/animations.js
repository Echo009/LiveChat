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
        $("#user-personalNote").blast({delimiter: "character"})
                .css("opacity", 0)
                .velocity("transition.perspectiveDownIn", {stagger: 150, drag: true, complete: function () {
                        $(this).velocity("transition.perspectiveDownOut", {stagger: 150, drag: true, backwards: true});
                    }
                });
    }, 5190);
});


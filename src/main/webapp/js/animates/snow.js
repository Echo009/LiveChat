/* 
 * Author : echo0 
 * Email   : ech0.extreme@foxmail.com
 * Time    : 2017年6月13日13:25:14 
 */


(function ($) {
    $.fn.snow = function (options) {
        var $flake = $('<div id="flake" />')
                .css({'position': 'absolute', 'top': '-50px'})
                .html('&#9834;'),
                documentHeight = $(document).height(),
                documentWidth = $(document).width(),
                defaults = {minSize: 10, maxSize: 20, newOn: 500, flakeColor: "#E87A90"},
        options = $.extend({},
                defaults, options);
        var interval = setInterval(function () {
            var startPositionLeft = Math.random() * documentWidth - 100, startOpacity = 0.5 + Math.random(),
                    sizeFlake = options.minSize + Math.random() * options.maxSize,
                    endPositionTop = documentHeight - 100,
                    endPositionLeft = startPositionLeft - 100 + Math.random() * 200,
                    durationFall = documentHeight * 10 + Math.random() * 5000;
            $flake.clone().
                    appendTo('body')
                    .css({left: startPositionLeft, opacity: startOpacity, 'font-size': sizeFlake, color: options.flakeColor})
                    .stop()
                    .animate({top: endPositionTop, left: endPositionLeft, opacity: 0.2},
                            durationFall,
                            'linear',
                            function () {
                                $(this).remove()
                            });
        }, options.newOn);
    };
})(jQuery);
$.fn.snow({minSize: 17, maxSize: 50, newOn: 800, flakeColor: 'cyan'});
(function ($) {
    $.fn.extend({
        addSocial: function (options) {
            var defaults = {
            };

            var options = $.extend(defaults, options);

            var twsrc = 'http://platform.twitter.com/widgets/tweet_button.html?' + $.param({
                count  : 'vertical',
                url    : window.location.href,
                text   : document.title
            });

            var fbsrc = 'http://www.facebook.com/plugins/like.php?' + $.param({
                href   : window.location.href,
                layout : 'box_count',
                width  : 450,
                height : 80,
                action : 'like',
                font   : 'verdana',
                show_faces  : true,
                colorscheme : 'light'
            });

            var tw = $("<iframe>").attr({
                allowTransparency : true,
                frameborder : 0,
                scrolling   : 'no',
                src         : twsrc
            }).css({
                border   : 'none',
                overflow : 'hidden',
                width    : '65px',
                height   : '65px'
            });

            var fb = $('<iframe>').attr({
                allowTransparency : true,
                frameborder : 0,
                scrolling   : 'no',
                src         : fbsrc
            }).css({
                border   : 'none',
                overflow : 'hidden',
                width    : '80px',
                height   : '65px'
            });

            this.append(
                $("<div>").html(tw).css({'float': 'left'}),
                $("<div>").html(fb).css({'float': 'left'}),
                $("<div>").css({clear: 'both'})
            );

            return this;
        }
    });
})(jQuery);


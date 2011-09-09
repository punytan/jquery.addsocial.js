(function ($) {
    $.fn.extend({
        addSocial: function (options) {
            var defaults = {};
            var options = $.extend(defaults, options);

            var require = function(d,libs){
                $.each(libs, function(id, src){
                    if (d.getElementById(id)) {return;}
                    var js = d.createElement('script');
                    js.id       = id;
                    js.src      = src;
                    js.async    = true;
                    d.getElementsByTagName('head')[0].appendChild(js);
                });
            }

            var $fb = $('<div>').attr({
                'class'             : 'fb-like',
                'data-href'         : window.location.href,
                'data-send'         : 'false',
                'data-layout'       : 'box_count',
                'data-show-faces'   : 'false',
                'data-font'         : 'arial'
            });

            var $tw = $('<a>').attr({
                'href'          : "http://twitter.com/share",
                'class'         : 'twitter-share-button',
                'data-count'    : 'vertical',
                'data-lang'     : 'en'
            }).text('Tweet');

            require(document,{
                'facebook-jssdk'  : "https://connect.facebook.net/en_US/all.js#xfbml=1",
                'twitter-widgets' : "http://platform.twitter.com/widgets.js",
            });

            this.append(
                $("<div>").html($tw).css({float: 'left'}),
                $("<div>").html($fb).css({float: 'left'}),
                $("<div>").css({clear: 'both'})
            );

            return this;
        },
    });
})(jQuery);


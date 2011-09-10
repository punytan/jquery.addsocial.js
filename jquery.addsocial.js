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
            };

            var $fb = $('<div>').attr({
                'class'             : 'fb-like',
                'data-href'         : window.location.href,
                'data-send'         : 'false',
                'data-layout'       : 'button_count',
                'data-show-faces'   : 'false',
                'data-font'         : 'arial'
            });

            var $tw = $('<a>').attr({
                'href'          : "http://twitter.com/share",
                'class'         : 'twitter-share-button',
                'data-count'    : 'horizontal',
                'data-lang'     : 'en'
            }).text('Tweet');

            var $hatena = $('<a>').attr({
                'href'  : "http://b.hatena.ne.jp/entry/"+window.location.href,
                'class' : 'hatena-bookmark-button',
                'data-hatena-bookmark-title' : 'hatena-bookmark',
                'data-hatena-bookmark-layout' : 'standard',
                'title' : 'Add to hatena bookmark.'
            }).append(
                $('<img>').attr({
                    'src' : 'http://b.st-hatena.com/images/entry-button/button-only.gif',
                    'alt' : 'Add to hatena bookmark',
                    'border': 'none'
                })
            );


            require(document,{
                'facebook-jssdk'  : "https://connect.facebook.net/en_US/all.js#xfbml=1",
                'twitter-widgets' : "http://platform.twitter.com/widgets.js",
                'hatena-bookmark' : "http://b.st-hatena.com/js/bookmark_button.js"
            });

            this.append(
                $("<div>").html($tw).css({float: 'left'}),
                $("<div>").html($fb).css({float: 'left'}),
                $("<div>").html($hatena).css({float: 'left'}),
                $("<div>").css({clear: 'both'})
            );

            return this;
        },
    });
})(jQuery);


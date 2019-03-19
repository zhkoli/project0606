// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

$.fn.toTop = function(top){
    var $this = this;
    var $window = $(window);

    $this.click(function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });

    $window.scroll(function(e){

        var scrollTop = $window.scrollTop();
        if(scrollTop > top){
            $this.show();
            $this.addClass('fadeIn');
            $this.removeClass('fadeOut');
        }else {
            $this.removeClass('fadeIn');
            $this.addClass('fadeOut');
            $this.hide();
        }

    });
};

$.fn.stick = function(top){
    var $this = this;
    var $window = $(window);

    $window.scroll(function(e){

        var scrollTop = $window.scrollTop();

        if(scrollTop > top){
            $this.addClass('sticked');
        }else {
            $this.removeClass('sticked');
        }

    });
};

$.fn.gridify = function(){
    var $this = this;
    var cols = $('.container > .row > div', $this);
    cols.each(function(){
        var classes = $(this).parents('.section').attr('class');
        $(this).append('<div class="gridify">' + classes + '</div>');
    });
}
$.fn.imagify = function(){
    $(this).append('<img>');
    $('img', this).attr('src', 'img/img.jpg');
}
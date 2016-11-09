$(function() {
    $('.dropdown-toggle').dropdown();
});

$('.navbar .navbar-nav li a').click(function() {
    $(window).scrollTo($($(this).attr('href')), 300, { offset: { left:0, top: -90 }});
});

(function($) {
    var $pswp = $('.pswp')[0];
    var image = [];

    $('.pictures').each( function() {
        var $pic     = $(this),
            getItems = function() {
                var items = [];
                $pic.find('a').each(function() {
                    var $href   = $(this).attr('href'),
                        $size   = $(this).data('size').split('x'),
                        $width  = $size[0],
                        $height = $size[1];

                    var item = {
                        src : $href,
                        w   : $width,
                        h   : $height
                    }

                    items.push(item);
                });
                return items;
            }

        var items = getItems();

        $.each(items, function(index, value) {
            image[index]     = new Image();
            image[index].src = value['src'];
        });

        $pic.on('click', 'figure', function(event) {
            event.preventDefault();

            var $index = $(this).index();
            var options = {
                index: $index,
                bgOpacity: 0.9,
                showHideOpacity: true,
                shareEl: false,
                zoomEl: false,
                maxSpreadZoom: 1,
                getDoubleTapZoom: function(isMouseClick, item) {
                    return item.initialZoomLevel;
                },
                pinchToClose: false
            }

            var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
            lightBox.init();
        });
    });
})(jQuery);

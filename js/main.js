!(function ($, undefined) {

    var initTablet = function () {

        

    }
    var initNotTablet = function () {

        // Always close nav when switching to desktop mode
        $("body").removeClass("surround--open");
         
    }

    var initMobile = function () {

        $('.gallery').justifiedGallery('destroy');
        $(".gallery").justifiedGallery({
            rowHeight: 90, 
            maxRowHeight: 200,
            lastRow: 'justify',
            margins: 0
        });

    };
    var initNotMobile = function () {

        $('.gallery').justifiedGallery('destroy');
        $(".gallery").justifiedGallery({
            rowHeight: 230, 
            maxRowHeight: 400,
            lastRow: 'justify',
            margins: 0
        });

    }

    var initCommon = function () {

        // Reset js classes to show js is enabled
        $("html").removeClass("no-js").addClass("js");

        $(".nav__toggle").on("click", function (e) {
            e.preventDefault();
            $("body").toggleClass("surround--open");
        });

        var galleryCount = 0;
        $(".gallery").each(function(idx, itm){
            $(itm).children().each(function(idx2, itm2){
                $(itm2).attr("data-lightbox", "g" + galleryCount);
            });
            galleryCount++;
        });

        lightbox.option({
            'resizeDuration': 200,
            'maxWidth': 1000
        });

        /*
        $(".carousel").cycle({
            swipe: true,
            slides: "> .carousel__item",
            timeout: 5000
        });
        */
        
    };

    enquire.register('screen and (min-width: 62.001em)', {
        match: function () {
            initNotTablet();
        }
    });
    enquire.register('screen and (max-width: 62em)', {
        match: function () {
            initTablet();
        }
    });


    enquire.register('screen and (min-width: 48.5001em)', {
        match: function () {
            initNotMobile();
        }
    });
    enquire.register('screen and (max-width: 48.5em)', {
        match: function () {
            initMobile();
        }
    });

    initCommon();

})(jQuery);
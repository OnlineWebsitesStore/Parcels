jQuery(document).ready(function(){

	var header_height = jQuery('#header').height();

	/* parallax header */
	function parallax(){
	  var scrolled = jQuery(window).scrollTop();
	  jQuery('#header .backstretch img').css('top',''+-(scrolled*0.6)+'px');
      jQuery('.heading').css('background-position', 'center '+-(scrolled*0.5)+'px');
	}


    /* backstretch slider */
    jQuery('.header-slide').backstretch([
      "slide/bg01.jpg",
      "slide/bg02.jpg",
      "slide/bg03.jpg"
      ], {
        fade: 850,
        duration: 4000
    });


    /* navbar */
	jQuery(window).scroll(function(){
		parallax();
		if(jQuery(window).scrollTop() > header_height){
            //jQuery('.navbar').css('border-bottom-color', '#37bc9b');
		}else{
            //jQuery('.navbar').css('border-bottom-color', '#fff');
		}
	});


    /* nice scroll */
    jQuery( 'html' ).niceScroll({
        cursorcolor: '#434a54',
        cursorwidth: '10px',
        cursorborder: '1px solid #434a54',
        cursoropacitymax: 0.9,                
        scrollspeed: 200,
        zindex: 1060
    });


    /* carousel testimony */
    jQuery('#testislider').carousel({
        interval: 6000
    })

	/* carousel partner */
	var jcarousel = jQuery('.jcarousel');

    jcarousel
        .on('jcarousel:reload jcarousel:create', function () {
            var width = jcarousel.innerWidth();

            if(width >= 992){
            	width = width / 5;
            } else if (width >= 768) {
                width = width / 4;
            } else if (width >= 480) {
                width = width / 3;
            } else if(width >= 350){
            	width = width / 2;
            }

            jcarousel.jcarousel('items').css('width', width + 'px');
        })
        .jcarousel({
            wrap: 'circular'
        });

    jQuery('.jcarousel-control-prev')
        .jcarouselControl({
            target: '-=1'
        });

    jQuery('.jcarousel-control-next')
        .jcarouselControl({
            target: '+=1'
    	});

    jQuery('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function() {
            jQuery(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function() {
            jQuery(this).removeClass('active');
        })
        .on('click', function(e) {
            e.preventDefault();
        })
        .jcarouselPagination({
            perPage: 1,
            item: function(page) {
                return '<a href="#' + page + '">' + page + '</a>';
        }
    });


    /* scrolltop */
    jQuery('.scroltop').on('click', function(event) {
        var $anchor = jQuery(this);
        jQuery('html, body').stop().animate({
            scrollTop: jQuery($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


    /* masonry layout */
    // var $container = jQuery('.container-realestate');
    // $container.imagesLoaded( function(){
    //     $container.masonry();
    // });


    /* modal */
    jQuery('.modal').on('shown.bs.modal', function () {
        var curModal = this;
        jQuery('.modal').each(function(){
            if(this != curModal){
                jQuery(this).modal('hide');
            }
        });
    });


    /* tooltip */
    jQuery('[rel="tooltip"]').tooltip();


    /* map contact */
    // jQuery("#map").gmap3({
    //     map: {
    //         options: {
    //           center: [-7.866315,110.389574],
    //           zoom: 12,
    //           scrollwheel: false
    //         }  
    //      },
    //     marker:{
    //         latLng: [-7.866315,110.389574],
    //         options: {
    //          icon: new google.maps.MarkerImage(
    //            "https://dl.dropboxusercontent.com/u/29545616/Preview/location.png",
    //            new google.maps.Size(48, 48, "px", "px")
    //          )
    //         }
    //      }
    // });


    /* carousel single */
    jQuery('#slider-property').carousel({
        interval: 6500
    })


    /* map property */
    jQuery('a[href="#location"]').on('shown.bs.tab', function(){
        jQuery("#map-property").gmap3({
            map: {
                options: {
                  center: [-7.866315,110.389574],
                  zoom: 13,
                  scrollwheel: false
                }  
             },
            marker:{
                latLng: [-7.866315,110.389574],
                options: {
                 icon: new google.maps.MarkerImage(
                   "https://dl.dropboxusercontent.com/u/29545616/Preview/location.png",
                   new google.maps.Size(48, 48, "px", "px")
                 )
                }
             }
        });
    })
});
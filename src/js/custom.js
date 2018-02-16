//Check-jQ
// window.onload = function() {
// if (window.jQuery) {
// // jQuery is loaded
// alert("Yeah!");
// } else {
// // jQuery is not loaded
// alert("Doesn't Work");
// }
// }


//MENU
$("#navToggle").click(function () {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ? prevents content scroll-behind
    $("body").toggleClass("locked");
});
$('.overlay').click(function () {
    $(this).removeClass('open');
    $('.navBurger').removeClass('active');
    $("body").removeClass("locked");
});


//SCROLL-DOWN
//
$(function () {
    $('.scroll-down').click(function () {
        $('html, body').animate({scrollTop: $('section.ok').offset().top}, 'slow');
        return false;

    });
    var IsInViewport = function (el) {
        if (typeof jQuery === "function" && el instanceof jQuery) el = el[0];
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

// example
    function checkElementsInViewport() {
        for (var i = 0; i < $('.in-viewport-animation').length; i++) {
            if (IsInViewport($('.in-viewport-animation')[i])) {
                $('.in-viewport-animation')[i].classList.add('animated');
            }
        }
        ;
    };

    checkElementsInViewport();

    $(window).on('scroll', function () {
        checkElementsInViewport();
    })

});

//SLICK-SLIDER

$('.slider').slick({
    dots: true,
    slideToShow: 3,
    slideToScroll: 3,
    infinite: true,
    dots: false,
    responsive: [
        {
            breakpoint: 768,
            settings: 'slick',
            settings: {
                slidesToShow: 6,
                slidesToScroll: 3,
                adaptiveHeight: true
            }
        },
        {
            breakpoint: 970,
            settings: 'slick',
            settings: {
                slidesToShow: 9,
                slidesToScroll: 9,
                adaptiveHeight: true
            }
        },
        {
            breakpoint: 3000,
            settings: 'unslick'

        }
    ]
});

//$('.clients-block-global').wrapAll('<div class="wrap-slider"><div>');
//(function() {
//    var div = document.getElementsByClassName('');
//    style = div[0].style;
//    style.color="red";
//})();

//window. addEventListener('.slick-track', function(){
//    var width = window.innerWidth;
//    var height = window.innerHeight;
//    renderer.setSize (width, height);
//    camera.aspect = width / height;
//    camera.updateProjectionMatrix();
//
//});





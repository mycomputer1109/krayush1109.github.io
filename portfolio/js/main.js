jQuery(document).ready(function(){

    // Custom Function

    // Logo
    var $logo = $('#logo');

    if (location.href.indexOf("#") != -1) {
        $logo.show();
    }

    // Show logo
    $('.menu .tabs a').click(function() {
        $logo.fadeIn('slow');
    });

    // Hide logo
    $('.tab-profile').click(function() {
        $logo.fadeOut('slow');
    });





    $('#yellow-color').click(function(e){
        $(".main-wrapper-resume").attr("id", "yellow");
    });

    
    $('#red-color').click(function(e){
        $(".main-wrapper-resume").attr("id", "red");
    });

    
    $('#blue-color').click(function(e){
        $(".main-wrapper-resume").attr("id", "blue");
    });

    
    $('#green-color').click(function(e){
        $(".main-wrapper-resume").attr("id", "green");
    });

    $("setting-icon").click(function(){
        $(".color-box").toggleClass("main");
    });




    // ::::::::::::::::::::::::::::::::
    // Portfolio clickable buttons code  are below
    var $catsfilter = $('.cats-filter');
    $catsfilter.find('a').click(function(){
        var currentOption = $(this).attr('data-filter');
        $(this).parent().parent().find('a').removeClass('current');
        $(this).addClass('current');
    });

    var $plist = $('#portfolio-list');
    var $pfilter = $('#portfolio-filter');

    $plist.isotope({
        filter : '*',
        layoutMode : 'masonry',
        animationOption: {
            duration: 750,
            easing : 'linear'
        }
    });

    $pfilter.find('a').click(function(){
        var selector = $(this).attr('data-filter');
        $plist.isotope({
            filter : selector,        
            animationOption : {
                duration : 750,
                easing : 'linear',
                queue: false
            }
        });
         
        return false;

    });





// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Menu

// Needed variables
var $content = $("#content");

// Run easytabs
$content.easytabs({
    animate     : true,
    updateHash  : false,
    transitionIn: 'slideDown',
    transitionOut: 'slideUp',
    animationSpeed: 600,
    tabs          : ".tmenu",
    tabActiveClass: 'active',
});


// Hover menu effect
$content.find('.tabs li a').hover(
    function() {
        $(this).stop().animation({ marginTop: "-7px"}, 200);
    }
);


});

$(document).ready(function () {
    setTimeout(function () {
        document.getElementById("hero-video").play();
    }, 3000);
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $("header").css("background-color", "black");  
        } 
        if($(window).scrollTop() > 500){
            document.getElementById("hero-video").pause();
        } else if($(window).scrollTop() < 10) {
            $("header").css("background-color", "transparent");
            document.getElementById("hero-video").play();
        }
    });
    $(".owl-carousel").owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    });
    var figure = $(".video").hover(hoverVideo, hideVideo);

    function hoverVideo(e) {
        $('video', this).get(0).play();
    }

    function hideVideo(e) {
        $('video', this).get(0).pause();
        $('video', this).get(0).load();
    } 
    

});


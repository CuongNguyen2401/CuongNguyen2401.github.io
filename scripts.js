$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {

            $(".goTop").fadeIn();
        } else {
            $(".goTop").fadeOut();
        }
    });
    // this function make navHeader look like sticky
    $(window).scroll(function () {
        var navHeader = document.querySelector(".nav-header");
        
        if ($(this).scrollTop() > 0) {
            navHeader.style.top = 0;
        } else {
            navHeader.style.top = "45px";
        }

    });

    $(".goTop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });

    $("body").on("click", ".special", showMenu);

    function showMenu() {
        $(".menu").show();
    }
    $(".closeMenu").click(function (e) {
        e.preventDefault();
        $(".menu").show();
    });

    $(".closeMenu").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(".menu").hide();
    });

});
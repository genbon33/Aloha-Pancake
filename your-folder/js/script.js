$(function () {
    $(".hamburger-btn, .sp-nav-btn").click(function () {
        $(".sp-nav").slideToggle(300);
        $(".hamburger-btn").toggleClass("active");
    });
});
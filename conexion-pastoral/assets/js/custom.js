//scroll
window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        $('#site-header').addClass("bg-light");
    } else {
       $('#site-header').removeClass("bg-light");
    }
}
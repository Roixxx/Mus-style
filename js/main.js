
//Mask for phone input
$(function(){ $("#telephone").mask("+7(999)-999-99-99"); });

$('input[type="tel"]').click(function(){
    $(this).setCursorPosition(3); 
});

$.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};

// Fixing header

$(function() {
    let header = $("#header-top");
    let intorH = $("#header").innerHeight();
    let scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= intorH) {
            header.addClass("header-top--fixed");
        } else {
            header.removeClass("header-top--fixed");
        }
    }
});

/* menu-toggle */

$(function() {
    $("#menu-toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#header-top").toggleClass("header-top--active");
        $("#header-top__info").toggleClass("header-top__info--active");
    });
});
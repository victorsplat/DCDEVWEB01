$(() => {
    $('nav.mobile').click(() => {
        let menu = $('nav.mobile ul')
        if (menu.is(':hidden')) {
            menu.fadeIn();
            $("nav.mobile i").addClass("fa-times")
            $("nav.mobile i").removeClass("fa-bars")

        } else {
            menu.fadeOut();
            $("nav.mobile i").addClass("fa-bars")
            $("nav.mobile i").removeClass("fa-times")
        }
    })
})

if ($('target').length > 0) {
    const target = '#' + $('target').attr('target');
    const divScroll = $(target).offset().top;
    $('html,body').animate({ 'scrollTop': divScroll, }, 1200)
}
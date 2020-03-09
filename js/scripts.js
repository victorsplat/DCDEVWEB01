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

    if ($('target').length > 0) {
        const target = '#' + $('target').attr('target');
        const divScroll = $(target).offset().top;
        $('html,body').animate({ 'scrollTop': divScroll, }, 1200)
    }
    dynamicallyLoad();
    let page = $(this).attr("dynamicLoad")

    function dynamicallyLoad() {
        $("[dynamicLoad]").click((event) => {
            page = $(this).attr("dynamicLoad")
            console.log(page)
            $(".main-content").hide()
            $(".main-content").load(include_path + "pages/" + "contato.php")
            setTimeout(() => {
                initialize();
                addMarker(-23.118721, -46.581119, '', "Minha casa", undefined, false);
            }, 1000)
            $('.main-content').fadeIn(1000)

            return false;
        })
    }
})
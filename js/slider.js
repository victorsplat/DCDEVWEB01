$(() => {
    let curSlide = 0;
    const maxSlide = $(".banner-single").length - 1;
    const delay = 3;
    initSlider();
    changeSlide();

    function initSlider() {
        $(".banner-single").hide();
        $(".banner-single")
            .eq(0)
            .show();

        for (let i = 0; i < maxSlide + 1; i++) {
            let bullets = $(".bullets").html();
            if (i === 0)
                bullets += "<span class='active-slider'></span>";
            else
                bullets += "<span></span>";
            $(".bullets").html(bullets);
        }

    }

    function changeSlide() {
        setInterval(() => {
            $(".banner-single")
                .eq(curSlide)
                .fadeOut(1000);
            curSlide++;
            if (curSlide > maxSlide) {
                curSlide = 0;
            }
            $(".banner-single")
                .eq(curSlide)
                .fadeIn(1000);
            $(".bullets span").removeClass("active-slider");
            $(".bullets span")
                .eq(curSlide)
                .addClass("active-slider");
        }, delay * 2000);
    }

    $("body").on("click", ".bullets span", function() {
        $(".bullets span").removeClass("active-slider")
        $(this).addClass("active-slider")
        $(".banner-single")
            .eq(curSlide)
            .stop()
            .fadeOut(1000);
        curSlide = $(this).index();
        $(".banner-single")
            .eq(curSlide)
            .fadeIn(1000);
    })
});
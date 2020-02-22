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
    }

    function changeSlide() {
        setInterval(() => {
            $(".banner-single")
                .eq(curSlide)
                .fadeOut(2000);
            curSlide++;

            if (curSlide > maxSlide) {
                curSlide = 0;
            }
            $(".banner-single")
                .eq(curSlide)
                .fadeIn(2000);
        }, delay * 1000);
    }
});
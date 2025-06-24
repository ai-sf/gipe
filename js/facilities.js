(function ($) {
    $(function () {
        const param = window.location.hash.substring(1);
        if (param) {
            const $target = $("#" + param);

            if ($target.length) {
                // applica la classe di evidenziazione temporanea
                $target.addClass("highlighted-card");

                // scrolla alla card
                $("html, body").animate({
                    scrollTop: $target.offset().top - 40
                }, 500);

                // rimuove evidenziazione e hash dopo 3 secondi
                setTimeout(() => {
                    $target.removeClass("highlighted-card");
                    history.replaceState(null, null, window.location.pathname);
                }, 1500);
            }
        }
    });
})(jQuery);

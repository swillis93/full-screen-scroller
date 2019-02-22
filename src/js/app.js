var fssInit = function(userOptions){

    var fssOptions = {
        wrapper: userOptions.wrapper ? $(userOptions.wrapper) : $('.fss-wrapper'),
        inner: userOptions.inner ? $(userOptions.inner) : $('.fss-inner'),
        toggle: userOptions.toggle ? $(userOptions.toggle) : $('.fss-toggle'),
        headerHeight: userOptions.headerHeight ? userOptions.headerHeight : null
    }

    if (!fssOptions.headerHeight) {
        fssOptions.headerHeight = fssOptions.wrapper.outerHeight(true);
    }

    var navOpenState = false;

    fssOptions.wrapper.css({
        'height': '100%',
        'max-height': fssOptions.headerHeight,
    });
    fssOptions.inner.show();

    fssOptions.toggle.click(function (e) {
        e.preventDefault();

        if (navOpenState) {
            $('body').toggleClass('noscroll');
            fssOptions.wrapper.removeClass('active');
            navOpenState = false;
        } else {
            fssOptions.wrapper.addClass('active');
                $('body').toggleClass('noscroll');
            navOpenState = true;
        }

    });
};

$(document).ready(function(){

    fssInit({
        wrapper: '.js-header',
        inner: '.js-nav'
    });

});
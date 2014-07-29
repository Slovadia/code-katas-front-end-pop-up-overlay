function popUpHandler(options) {
    var popUp = {
        options: {
            'popup': $('#pop-up'),
            'lightbox': $('.pop-up-content-wrapper'),
            'trigger': $('.trigger'),
            'closeLink': $('close-link')
        },
        showPopUp: function () {
            this.options.popup.removeClass('hidden');
            this.options.lightbox.css({
                'position': "relative",
                'top': "50%",
                'left': "50%",
                'margin-top': "-".concat((String)(this.options.lightbox.height() / 2), "px"),
                'margin-left': "-".concat((String)(this.options.lightbox.width() / 2), "px")
            });
            var popup = this;
            this.options.popup.on('click', function (e) {
                if (e.target == popup.options.popup[0] || e.target.id == popup.options.closeLink) {
                    popup.hidePopUp();
                }
            });
            $(document).keyup(function (e) {
                var KEYCODE_ESC = 27;
                if (e.keyCode == KEYCODE_ESC) {
                    popup.hidePopUp();
                }
            });
        },
        hidePopUp: function () {
            this.options.popup.addClass('hidden');
        },
        init: function () {
            jQuery.extend(this.options, options || {});

            this.options.trigger.each(function(){
                var elem = $(this);

                elem.on('click', function(e){
                    e.preventDefault();
                    console.log('elem click!');
                    console.log(popUp.options.popup.hasClass('hidden'));
                    if (popUp.options.popup.hasClass('hidden')) {
                        popUp.showPopUp();
                    }
                });

                return this;
            });
        }
    };

    return popUp.init();
}

$(document).ready(function(){
    popUpHandler();
});
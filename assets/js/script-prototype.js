function popUpHandler(options) {
    var popUp = {
        options: {
            'popup' : $('pop-up'),
            'lightbox' : $('pop-up').select('.pop-up-wrapper')[0],
            'trigger' : $$('.description'),
            'closeLink' : 'close-link'
        },
        showPopUp : function(){
            this.options.popup.removeClassName('hidden');

            var wrapper = this.options.popup.childElements('.pop-up-content-wrapper')[0];
            wrapper.setStyle({
                'position': "relative",
                'top': "50%",
                'left': "50%",
                'margin-top': "-".concat((String)(wrapper.getHeight() / 2), "px"),
                'margin-left': "-".concat((String)(wrapper.getWidth() / 2), "px")
            });

            this.options.popup.observe('click',function(e){
                if(e.target == this.options.popup || e.target.id == this.options.closeLink ){
                    this.hidePopUp();
                }
            }.bind(this));
            document.observe('keyup', function (e) {
                var KEYCODE_ESC = 27;
                if (e.keyCode === KEYCODE_ESC) {
                    this.hidePopUp();
                }
            }.bind(this));
        },
        hidePopUp: function(){
            this.options.popup.addClassName('hidden');
        },
        init: function(){

            Object.extend(this.options, options || {});

            this.options.trigger.each(function(ele) {

                ele.observe('click', function(e){
                    if(popUp.options.popup.hasClassName('hidden')){
                        popUp.showPopUp();
                    }
                });

                return this;
            });
        }
    };

    return popUp.init();
}

document.observe('dom:loaded', function(){
    popUpHandler();
});
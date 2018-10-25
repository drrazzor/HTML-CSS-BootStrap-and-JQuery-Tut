/*================================================
                        SERVICES
=================================================*/

//$(function(){ }); >> >> Alternate form below
$(document).ready(function () {
    new WOW().init();
});


$(document).ready(function () {
    $('#work').magnificPopup({}
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
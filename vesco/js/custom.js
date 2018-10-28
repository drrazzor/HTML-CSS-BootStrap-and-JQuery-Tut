/*================================================
                        SERVICES
=================================================*/

//$(function(){ }); >> >> Alternate form below
$(function () {
    //https://mynameismatthieu.com/WOW/docs.html
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


/*================================================
                        TEAM
=================================================*/

$(function(){
    
$("#team-members").owlCarousel();
} 
 )
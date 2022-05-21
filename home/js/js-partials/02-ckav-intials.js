    /*=============================================
    = INTIAL FUNCTIONS
    =============================================*/
    ckav.intials = {

        /*----------  INIT FUNCTION  ----------*/
        init: function() {
            ckav.intials.pageTransition();
            ckav.intials.scrollLinkUpdate();
        },

        /*----------  PAGE TRANSITION  ----------*/
        pageTransition: function() {
            if($o.$menuIcon) {
                $o.$menuIcon.on("click", function(){
                    $(this).toggleClass("active");
                    $o.$ckavBody.toggleClass("active-page");
                });
            }

            if($o.$extraPageLink) {
                $o.$extraPageLink.on("click", function(){
                    $o.$menuIcon.toggleClass("active");
                    $o.$ckavBody.toggleClass("active-page");
                }); 
            }

            if($o.$navigationLink) {
                if($o.$html.hasClass("device-mobile")) {
                    $o.$navigationLink.on("click", function() {
                        $o.$navigationLink.parent().removeClass("current");
                        $(this).parent().addClass('current');
                        $o.$menuIcon.toggleClass("active");
                        $o.$ckavBody.toggleClass("active-page");
                    });
                }
            }
        },

        /*----------  LINK UPDATE ON SCROLL  ----------*/
        scrollLinkUpdate: function() {
            $(window).scroll(function() {
                var scrollLink = $(".navlink");
                var scrollbarLocation = $(this).scrollTop();
                
                scrollLink.each(function() {
                  
                  var sectionOffset = $(this.hash).offset().top - 20;
                  
                  if ( sectionOffset <= scrollbarLocation ) {
                    $(this).parent().addClass('current');
                    $(this).parent().siblings().removeClass('current');
                  }
                })
                
            })
        },

    };
    
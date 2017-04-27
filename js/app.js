
//------------ Botões de foto ----------

var counterClick =1;
$("#move_right" ).on("click", function() {
    //modificando o contador
    let counterPrevious = 0;
    counterClick +=1;
    counterPrevious = counterClick - 1;

    //define a capacidade máxima de 5 imagens
    if(counterClick==6) counterClick=1;

    //Log
   /* console.log(counterClick);
    console.log(counterPrevious);
    console.log("bg_"+counterClick);*/

    //Removendo classe anterior e adicionando a próxima
    $("#top").removeClass("bg_"+counterPrevious).addClass("bg_"+ counterClick);
});

$("#move_left" ).on("click", function() {
    //modificando o contador
    let counterNext = 0;
    counterClick -=1;
    counterNext = counterClick + 1;

    //define a capacidade máxima de 5 imagens
    if(counterClick==0) counterClick=5;

    //Log
    console.log(counterClick);
    console.log(counterNext);
    console.log("bg_"+counterClick);

    //Removendo classe anterior e adicionando a próxima
    $("#top").removeClass("bg_"+ counterNext).addClass("bg_"+ counterClick);
    $( "header" ).fadeIn(5000); //pq não funciona?
});

//------------ Navigation ----------

  // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Scrolls to the selected menu item on the page
    $(function() {
        $('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    //#to-top button appears after scrolling
    var fixed = false;
    $(document).scroll(function() {
        if ($(this).scrollTop() > 250) {
            if (!fixed) {
                fixed = true;
                // $('#to-top').css({position:'fixed', display:'block'});
                $('#to-top').show("slow", function() {
                    $('#to-top').css({
                        position: 'fixed',
                        display: 'block'
                    });
                });
            }
        } else {
            if (fixed) {
                fixed = false;
                $('#to-top').hide("slow", function() {
                    $('#to-top').css({
                        display: 'none'
                    });
                });
            }
        }
    });

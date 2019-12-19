$(document).ready(function() {
    var product = 0;
    var timer;
    $(".js-img-item").click( function() {
        resetTimer();
        var index = $(".js-img-item").index($(this));
        moveItem(index);
        product = index;          
        setOpacity();
        timeOut(".js-img-item");
    });
    
    $(".js-click-left").click( function() {
        resetTimer();
        moveLeft();
        setOpacity();
        timeOut(".js-click-left");
    });
    
    $(".js-click-right").click( function() {
        resetTimer();
        moveRight();
        setOpacity();
        timeOut(".js-click-right");
    });

    function init() {
        setOpacity();
        resetTimer();
    }

    function timeOut(item) {
        $(item).css({pointerEvents: "none"})
        setTimeout( function(){
            $(item).css({pointerEvents: "auto"})
        }, 500)
    }
   
    function moveLeft() {
        product--;
        if(product < 0) product = 4;
        moveItem(product);
    }
   
    function moveRight() {
        product++;
        if(product > 4) product = 0;
        moveItem(product);
    }

    function setOpacity() {
        var imgItem = document.getElementsByClassName("js-img-item ");
        imgItem[product].style.opacity = "0.5";
        for(i = 0; i < imgItem.length; i++) {
            if(i !== product) {
                imgItem[i].style.opacity = "1";
            }
        }
    }

    function moveItem(offset) {
        var position = 648 * offset;
        $(".js-list-products").animate({left: -position}, 500);        
    }
  
    function automateMotion() {
      moveRight();
      setOpacity();
    }
      
    function resetTimer() {
        clearInterval(timer);
        timer = setInterval(automateMotion, 3000);      
    }
    
    init();
});

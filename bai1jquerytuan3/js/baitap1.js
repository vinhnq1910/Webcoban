$(document).ready(function() {
		var buttonState = [0, 0, 0, 0, 0];
		var oldIndex = 0;
		
		/* Show menu content */
		$(".js-list-item").on("click", ".js-list-item-button", slideContent);
		
		/* Show special product pop-up  */
		$(".js-special-product-button").click( function() {
				animateProductInfo(".js-special-product");
		});
		
		/* Show common product pop-up  */
		$(".js-common-product-button").click( function() {
				animateProductInfo(".js-common-product");
		});
		
		/* Hide product pop-up  */
		$(".js-button-close").click( function() {
				$(this).parent().hide();
				$(this).parent().animate({top: "-70%"}, 500);
				$(".js-list-item").css({pointerEvents: "auto"});
		});

		function slideContent() {
				returnDefaultImg();
				$(".js-blockcontent").not($(this).next()).hide();
				var listItem = $(this).parent();
				var index = $(".js-list-item" ).index(listItem );
				$(this).next(".js-blockcontent").slideToggle();
				if(oldIndex !== index) {
						buttonState[oldIndex] = 0;
				}
				oldIndex = index;
				if(buttonState[index] === 0) {
						$(this).attr("src","img/about" + (index + 1) + "_mb_hover.jpg");
						buttonState[index] = 1;
				}
				else {
						$(this).attr("src","img/about" + (index + 1) + "_mb.jpg");
						buttonState[index] = 0;
				}
				timeOut();
		}

		function timeOut(productCategory) {
				$(".js-list-item").css({pointerEvents: "none"})
				setTimeout( function(){
						$(".js-list-item").css({pointerEvents: "auto"})
				}, 500)
		}

		function animateProductInfo(productCategory) {
				$(productCategory).show();
				$(productCategory).animate({top:"34px"}, 500);
				$(".js-list-item").css({pointerEvents: "none"})
		}
		
		function returnDefaultImg() {
				var imageArray = document.getElementsByClassName("js-list-item-button");
				for(var i = 0; i < imageArray.length; i++) {
						imageArray[i].src = "img/about" + (i + 1) + "_mb.jpg";
				}
		}
});
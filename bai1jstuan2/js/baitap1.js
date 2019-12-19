$(document).ready(function() {
		function validateTextbox() {
				var textbox = document.getElementsByClassName("js-textbox");
				if($.trim(textbox[0].value).length > 20) {
						alert("Vượt quá 20 kí tự, xin hãy nhập lại.");
						return false;
				}
				else if($.trim(textbox[0].value).length === 0) {
						alert("Textbox vẫn chưa được nhập.");
						textbox[0].value = "";
						return false;
				}
				return true;
		}
		
		$(".js-button-add").click( function() {
				isValidated = validateTextbox();
				if(isValidated === true) {
						$(".js-list").append("<li class='list-item'>" + $(".js-textbox").val() + "<span class='button-close js-button-close'>X</span></li>");	
						var textbox = document.getElementsByClassName("js-textbox");
						textbox[0].value="";
				}
				$(".js-textbox").focus();
		});
		
		$('.js-list').delegate('.js-button-close','click',function() {
				$(this).parent().remove();
		});
});

$(window).on('load', function () {
		$(".js-textbox").focus();
});
$(document).ready(function(){   
	$('.scrollbox').scroll(function(event){
		var $this = $(this),
    		$head = $('.specific');
 
    	if ($this.scrollTop() > 10) {
       		$head.addClass('container_1');
       		$head.addClass('container_2');
 
    	} else {
       		$head.removeClass('container_1');
    	}
 
 
    	if (($this.scrollTop() + $this.height()) >=  ($('table').height() - 20)){
       		$head.removeClass('container_2');
    	}
	});
});
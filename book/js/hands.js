
jQuery(document).ready(function() {
	
	
});

jQuery(function() {


	jQuery('#cowSmall').click(function(e) {
		
		var smow = jQuery('#cowSmall');
		
		document.getElementById('cowfall').play();
		
		smow.addClass('littlecowclick');
		
		setTimeout(function() {	
			smow.removeClass('littlecowclick');
			smow.removeClass('littlecow');
		}, 7500);

	});
	

});




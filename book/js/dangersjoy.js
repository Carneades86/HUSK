jQuery(document).ready(function() {
	
	
});

jQuery(function() {

	var animating = 'one';
	
	jQuery('#wrapper006').click(function(e) {
				
		var danger = jQuery('#dangers')
		var dangers = jQuery('#thedangers');
		var joy = jQuery('#joys')	
		var joys = jQuery('#thejoys');
		var peacock = jQuery('#peacock');
		
		if (animating == 'one') {
			dangers.addClass('appear');
			joy.addClass('disappear');
			peacock.addClass('disappear');

			setTimeout(function() {	
				animating = 'two'
			}, 2000);
			
			};	
			
		if (animating == 'two') {
			dangers.removeClass('appear');
			dangers.addClass('disappear');
			
			danger.addClass('disappear');
			
			joy.removeClass('disappear');
			joy.addClass('appear');
			
			joys.addClass('appear');
			
				setTimeout(function() {	
					animating = 'three'
				}, 2000);
			
		};	
			
		if (animating == 'three') {
			dangers.removeClass('disappear');

			danger.removeClass('disappear');
			danger.addClass('appear');

			joy.removeClass('appear');
				
			joys.addClass('disappear');
			
			peacock.removeClass('disappear');
			peacock.addClass('appear');

				setTimeout(function() {	
					joys.removeClass('disappear');
					joys.removeClass('appear');
					danger.removeClass('appear');
					peacock.removeClass('appear');
					
					animating = 'one'
				}, 2000);

			};
					
	
		
	
		
		

	});
	

});

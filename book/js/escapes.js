
jQuery(document).ready(function() {
	
	
});

jQuery(function() {

	var title1 = jQuery('#escapeTitle1');
	var title2 = jQuery('#escapeTitle2');
	var title3 = jQuery('#escapeTitle3');
	var title4 = jQuery('#escapeTitle4');
	var title5 = jQuery('#escapeTitle5');
	var title6 = jQuery('#escapeTitle6');
	var title7 = jQuery('#escapeTitle7');
	var title8 = jQuery('#escapeTitle8');
	var title9 = jQuery('#escapeTitle9');
	var title10 = jQuery('#escapeTitle10');
	
	var text1 = jQuery('#escapeText1');
	var text2 = jQuery('#escapeText2');
	var text3 = jQuery('#escapeText3');
	var text4 = jQuery('#escapeText4');
	var text5 = jQuery('#escapeText5');
	var text6 = jQuery('#escapeText6');
	var text7 = jQuery('#escapeText7');
	var text8 = jQuery('#escapeText8');
	var text9 = jQuery('#escapeText9');
	var text10 = jQuery('#escapeText10');

	var animating = 'one';

	jQuery('#escapeTitle1').click(function(e) {
		
		if (animating == 'one') {
				
		setTimeout(function() {	
			animating = 'one'
		}, 2000);
	
		}
		
	});


	jQuery('#escapeTitle2').click(function(e) {
		
		if (animating == 'one') {
				
		title1.removeClass('title1active');
		title1.addClass('title1up');
		
		title2.removeClass('title2down');
		title2.addClass('title2active');
		
		text1.addClass('escdisappear');
		text2.addClass('escappear');
		
		setTimeout(function() {	
			animating = 'two'
		}, 2000);
	
		}
		
	});
	
	jQuery('#escapeTitle3').click(function(e) {
		
		if (animating == 'one') {
		
		title1.removeClass('title1active');
		title1.addClass('title1up');
		
		title2.addClass('title2up');
		
		title3.addClass('title3active');
		
		text1.addClass('escdisappear');
		text3.addClass('escappear');
		
		setTimeout(function() {	
			animating = 'three'
		}, 2000);
	
		}
		
	});
	
	jQuery('#escapeTitle4').click(function(e) {
		
		if (animating == 'one') {
		
		title1.removeClass('title1active');
		title1.addClass('title1up');
		
		title2.addClass('title2up');
		title3.addClass('title3up');
		
		title4.addClass('title4active');
		
		text1.addClass('escdisappear');
		text4.addClass('escappear');
		
		setTimeout(function() {	
			animating = 'four'
		}, 2000);
	
		}
		
	});
	
	jQuery('#escapeTitle5').click(function(e) {
		
		if (animating == 'one') {
		
		title1.removeClass('title1active');
		title1.addClass('title1up');
		
		title2.addClass('title2up');
		title3.addClass('title3up');
		title4.addClass('title4up');
		
		title5.addClass('title5active');
		
		text1.addClass('escdisappear');
		text5.addClass('escappear');
		
		setTimeout(function() {	
			animating = 'five'
		}, 2000);
	
		}
		
	});
	
	jQuery('#escapeTitle6').click(function(e) {
		
		if (animating == 'one') {
		
		title1.removeClass('title1active');
		title1.addClass('title1up');
		
		title2.addClass('title2up');
		title3.addClass('title3up');
		title4.addClass('title4up');
		title5.addClass('title5up');
		
		title6.addClass('title6active');
		
		text1.addClass('escdisappear');
		text6.addClass('escappear');
		
		setTimeout(function() {	
			animating = 'six'
		}, 2000);
	
		}
		
	});
	
	jQuery('#escapeTitle7').click(function(e) {
		
		if (animating == 'one') {
		
		title1.removeClass('title1active');
		title1.addClass('title1up');
		
		title2.addClass('title2up');
		title3.addClass('title3up');
		title4.addClass('title4up');
		title5.addClass('title5up');
		title6.addClass('title6up');
				
		title7.addClass('title7active')
		
		text1.addClass('escdisappear');
		text7.addClass('escappear');
		
		setTimeout(function() {	
			animating = 'seven'
		}, 2000);
	
		}
		
	});
	
	jQuery('#escapeTitle8').click(function(e) {
		
		if (animating == 'one') {
		
		title1.removeClass('title1active');
		title1.addClass('title1up');
		
		title2.addClass('title2up');
		title3.addClass('title3up');
		title4.addClass('title4up');	
		title5.addClass('title5up');
		title6.addClass('title6up');
		title7.addClass('title7up');
		
		title8.addClass('title8active');
		
		text1.addClass('escdisappear');
		text8.addClass('escappear');
		
		setTimeout(function() {	
			animating = 'eight'
		}, 2000);
	
		}
		
	});
	
	jQuery('#escapeTitle9').click(function(e) {
		
		if (animating == 'one') {
		
		title1.removeClass('title1active');
		title1.addClass('title1up');
		
		title2.addClass('title2up');
		title3.addClass('title3up');
		title4.addClass('title4up');	
		title5.addClass('title5up');
		title6.addClass('title6up');
		title7.addClass('title7up');
		title8.addClass('title8up');
		
		title9.addClass('title9activ');
		
		text1.addClass('escdisappear');
		text9.addClass('escappear');
		
		setTimeout(function() {	
			animating = 'nine'
		}, 2000);
	
		}
		
	});
	
	jQuery('#escapeTitle10').click(function(e) {
		
		if (animating == 'one') {
		
		title1.removeClass('title1active');
		title1.addClass('title1up');
		
		title2.addClass('title2up');
		title3.addClass('title3up');
		title4.addClass('title4up');	
		title5.addClass('title5up');
		title6.addClass('title6up');
		title7.addClass('title7up');
		title8.addClass('title8up');
		title9.addClass('title9up');
		
		text1.addClass('escdisappear');
		text10.addClass('escappear');
		
		setTimeout(function() {	
			animating = 'ten'
		}, 2000);
	
		}
		
	});
	
	

});


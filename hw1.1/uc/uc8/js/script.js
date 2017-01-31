
$(document).ready(function(){

	$('header h1').hover(
		function(){ $('header h1').animate({ top: 5 }, 'fast'); },
		function(){ $('header h1').animate({ top: 0 }, 'fast'); }
	);

	/* ---- Countdown timer ---- */
	$('#counter').countdown({
		timestamp : (new Date(2017, 9, 42)).getTime() + 10*24*60*60*1000
	});

});


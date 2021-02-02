(function() {
  [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {	
    new SelectFx(el);
  } );
})();

jQuery(document).ready(function($){
	var offset = 999;
	var s = 0.5;

	$(".custom-select").closest(".frm_section_heading").each(function(index) {
		$(this).css("z-index", offset - index);
   	});

   	$('.custom-select').each(function(index) {
     	$(this).css("z-index", offset - index);
   	});
	
	$('.cs-skin-underline, .cs-skin-rotate').each(function() {
    	var transitionDelay = 50;
    	$(this).find('li span').each(function( index ) {
        	var thisDelay = transitionDelay * index;
        	thisDelay = thisDelay + 'ms';
			$(this).css('transition-delay', thisDelay);
			$(this).css('-webkit-transition-delay', thisDelay);
    	});
	});	
});
$(window).on('resize', function(){
   var conwidth = $('.container').width()/2 - 30;
   $('.fixed_button').css('left','calc(50% + '+conwidth+'px)');
});
$('.collapse').collapse()

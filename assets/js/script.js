$(document).ready(function(){

//Augmenter la taille en passant sur le bouton plus
$('#hoverMore').hover(function(){
  $('#firstText').css('font-size','+=20px');
});
//Diminuer la taille en passant sur le bouton moins
$('#hoverLess').hover(function(){
  $('#firstText').css('font-size','-=10px');
});

});

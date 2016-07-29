/* -------------------------------------
 * Manejo de Java Script de la pagina de prueba para IDBC
 * ------------------------------------- 
 *
 * Realizado por Ronier Rodríguez 
 * at r.ronier@gmail.com
 */

function likeHome(){
    $('#myinfo').show();
	$('#mytimeline').hide();
};

$("#top-search").keyup(function (e) {
    if (e.keyCode == 13){
		$('#mytimeline').show();
		$('#myinfo').hide();
    }
});

/*	elimino la navegacion automatica de imagenes en el slideshow
	personalmente no me gusta dicha opción
*/
$('.carousel').carousel({
    interval: false
}); 

/*	Afuera de la clase carousel, los indicators dejan de
	aparecer como circulos llenos. Esto lo arregla.
*/
$(".carousel-indicators li").on('click', function(){
    $(this).siblings().removeClass('active')
    $(this).addClass('active');
});

/*	boceto de Manejo del timeline para uso con el API
	ignorar si esta comentado..

twttr.widgets.createTimeline({
  sourceType: "url",
  url: "https://twitter.com/search?q=norad"
  //https://twitter.com/search
},
document.getElementById('mytimeline'),
{
  height: '600',
  related: 'twitterdev, twitterapi'
}).then(function (el) {
  console.log("Embedded a timeline.")
});
*/
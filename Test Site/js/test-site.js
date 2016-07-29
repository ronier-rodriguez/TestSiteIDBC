/* -------------------------------------
 * Manejo de Java Script del sitio de prueba
 * ------------------------------------- */

/* Realizado por Ronier Rodríguez */

//elimino la navegacion automatica de imagenes en el slideshow
$('.carousel').carousel({
    interval: false
}); 

//Afuera de la clase carousel, los indicators dejan de
//aparecer como circulos llenos. Esto lo arregla.
$(".carousel-indicators li").on('click', function(){
    $(this).siblings().removeClass('active')
    $(this).addClass('active');
})

/*

twttr.widgets.createTimeline({
  sourceType: "url",
  url: "https://twitter.com/search?q=norad"
  //https://twitter.com/search
},
document.getElementById('mytimeline'),
{
  height: '600',
  related: 'twitterdev,twitterapi'
}).then(function (el) {
  console.log("Embedded a timeline.")
});
*/
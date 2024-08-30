// Sélectionne l'élément avec la classe 'carousel'
var carousel = $(".carousel"),
    // Initialise la variable currdeg à 0 pour suivre la rotation actuelle
    currdeg = 0;

// Attache un événement 'click' aux boutons pour faire tourner le carousel    
$(".next").on("click", { d: "n" }, rotate); //vers la droite
$(".prev").on("click", { d: "p" }, rotate); //vers la gauche

function rotate(e) {
    // Si l'événement est déclenché par le bouton 'next'
    if (e.data.d == "n") {
        currdeg = currdeg - 60;

    }
    // Si l'événement est déclenché par le bouton 'prev'
    if (e.data.d == "p") {
        currdeg = currdeg + 60;

    }

    // Applique la transformation de rotation pour les navigateurs
    carousel.css({
        "-webkit-transform": "rotateY(" + currdeg + "deg)",
        "-moz-transform": "rotateY(" + currdeg + "deg)",
        "-o-transform": "rotateY(" + currdeg + "deg)",
        "transform": "rotateY(" + currdeg + "deg)"
    });
}

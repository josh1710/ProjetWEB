// Au clic sur le bouton Rechercher, afficher une alerte avec le contenu du champ de recherche
let button = document.querySelector("button");

button.addEventListener("click", function() {
  let input = document.querySelector("input[type='text']");
  alert("Vous avez cherché : " + input.value);
});
neuille
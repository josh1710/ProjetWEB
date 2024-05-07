if (localStorage.getItem("panier")) {
    let panier = JSON.parse(localStorage.getItem("panier"));
    let total = 0;
  
    for (let i = 0; i < panier.length; i++) {
      let produit = panier[i];
      total += produit.prix;
      let ligne = document.createElement("p");
      ligne.textContent = produit.nom + " : " + produit.prix + "€";
      document.getElementById("liste-panier").appendChild(ligne);
    }
  
    document.getElementById("total-panier").textContent = "Total : " + total + "€";
  } else {
    document.getElementById("liste-panier").textContent = "Votre panier est vide.";
  }

  let viderPanier = document.getElementById("vider-panier");

viderPanier.addEventListener("click", function() {
  localStorage.removeItem("panier");
  document.getElementById("liste-panier").innerHTML = "";
  document.getElementById("total-panier").textContent = "";
});

payer.addEventListener("click", function() {
    window.location.href = "paiement.html";
  });
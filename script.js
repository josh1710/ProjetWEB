let button = document.querySelector("button");

button.addEventListener("click", function() {
  let input = document.querySelector("input[type='text']");
  alert("Vous avez cherché : " + input.value);
});


let produit1 = document.getElementById("produit1");
let produit1Modal = document.getElementById("modal-produit1");
let produit1ModalContent = document.querySelector("#modal-produit1 .modal-content");
let close1 = document.querySelector("#modal-produit1 [class='close']");
let ajouter1 = document.getElementById("ajouter1");

ajouter1.addEventListener("click", function() {
  let panier = JSON.parse(localStorage.getItem("panier")) || [];
  panier.push({nom: "Puff", prix: 10});
  localStorage.setItem("panier", JSON.stringify(panier));
});


produit1.onclick = function() {
  produit1Modal.style.display = "block";
}

close1.onclick = function() {
  produit1Modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === produit1Modal) {
    produit1Modal.style.display = "none";
  }
}


let produit2 = document.getElementById("produit2");
let produit2Modal = document.getElementById("modal-produit2");
let produit2ModalContent = document.querySelector("#modal-produit2 .modal-content");
let close2 = document.querySelector("#modal-produit2 [class='close']");
let ajouter2 = document.getElementById("ajouter2");

ajouter2.addEventListener("click", function() {
  let panier = JSON.parse(localStorage.getItem("panier")) || [];
  panier.push({nom: "Sandwich", prix: 7});
  localStorage.setItem("panier", JSON.stringify(panier));
});


produit2.onclick = function() {
  produit2Modal.style.display = "block";
}

close2.onclick = function() {
  produit2Modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === produit2Modal) {
    produit2Modal.style.display = "none";
  }
}


let produit3 = document.getElementById("produit3");
let produit3Modal = document.getElementById("modal-produit3");
let produit3ModalContent = document.querySelector("#modal-produit3 .modal-content");
let close3 = document.querySelector("#modal-produit3 [class='close']");
let ajouter3 = document.getElementById("ajouter3");

ajouter3.addEventListener("click", function() {
  let panier = JSON.parse(localStorage.getItem("panier")) || [];
  panier.push({nom: "Crocs", prix: 70});
  localStorage.setItem("panier", JSON.stringify(panier));
});


produit3.onclick = function() {
  produit3Modal.style.display = "block";
}

close3.onclick = function() {
  produit3Modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === produit3Modal) {
    produit3Modal.style.display = "none";
  }
}
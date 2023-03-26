// Sélectionnez tous les boutons "ajouter au panier"
const addToCartButtons = document.querySelectorAll(".add-to-cart");

// Initialisez un tableau vide pour stocker les produits ajoutés au panier
let cartItems = [];

// Ajouter un gestionnaire d'événements à chaque bouton "ajouter au panier"
addToCartButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // Récupérez les informations sur le produit à partir des éléments HTML correspondants
    const productRow = event.target.closest(".product");
    const productImage = productRow.querySelector("img").src;
    const productDescription = productRow.querySelector(".description").textContent;
    const productPrice = productRow.querySelector(".price").textContent;

    // Recherchez le produit correspondant dans le panier
    const existingCartItem = cartItems.find((item) => item.description === productDescription);
      
    // Si le produit est déjà dans le panier, mettez à jour sa quantité
    if (existingCartItem) {
      existingCartItem.quantity += 1;
      // Mettez à jour la quantité affichée dans la section du produit
      const quantityElement = productRow.querySelector(".quantité");
      quantityElement.textContent = `Quantité: ${existingCartItem.quantity}`;
      return; // Sortir de la fonction pour éviter l'ajout en double
    }

    // Sinon, ajoutez le produit au panier avec une quantité de 1
    cartItems.push({ image: productImage, description: productDescription, price: productPrice, quantity: 1 });

    // Fonction pour mettre à jour le nombre d'articles dans le panier affiché sur le bouton "voir mon panier"
    function updateCartCount() {
      const cartButton = document.querySelector("#panier");
      cartButton.innerHTML = `<p>Voir votre panier: <br>${cartItems.length} articles</p>`;
    }

    // Mettre à jour le nombre d'articles dans le panier affiché sur le bouton "voir mon panier"
    updateCartCount();
    
    // Mettre à jour la quantité affichée dans la section du produit
    const quantityElement = productRow.querySelector(".quantité");
    quantityElement.textContent = "Quantité: 1";
  });
});


// Ajouter un gestionnaire d'événements au bouton "voir mon panier"
const cartButton = document.querySelector("#panier");
cartButton.addEventListener("click", () => {
  let cartPage = document.querySelector('#div-panier').style.display = 'block'; document.querySelector('#home').style.display = "none";

// Parcourez tous les produits dans le panier et ajoutez-les à la page du panier
const cartAjout = document.querySelector("#achats-total");

cartItems.forEach((product) => {
  let cartProduct = document.createElement("div");
  cartProduct.classList.add("achat");
  cartProduct.innerHTML = `
    <img src="${product.image}" alt="${product.description}">
    <p>${product.description}</p>
    <p>${product.price}€</p>
    <p>Quantité:<br>${product.quantity}</p>
  `;
  cartAjout.appendChild(cartProduct);
});


function calculerPrixTotal(products) {
  let total = 0;

  products.forEach((product) => {
    total += product.price * product.quantity;
  });

  return total;
}

function priceTotal() {
  const cartPrice = document.querySelector("#price-total2");
  const total = calculerPrixTotal(cartItems); // ici, cartItems est l'argument à passer
  cartPrice.innerHTML = `<p>Votre panier est de:<br>${total} €</p>`;
}

priceTotal();

// Ajoutez la page du panier à l'élément body de la page
document.body.appendChild(cartPage);
});
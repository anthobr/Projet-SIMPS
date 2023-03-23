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
    const productQuantity = productRow.querySelector(".quantité").textContent;
  
    // Créez un objet pour représenter le produit et ajoutez-le au tableau du panier
    const product = { image: productImage, description: productDescription, price: productPrice, quantity: productQuantity };
    cartItems.push(product);

    // Fonction pour mettre à jour le nombre d'articles dans le panier affiché sur le bouton "voir mon panier"
function updateCartCount() {
  const cartButton = document.querySelector("#panier");
  cartButton.innerHTML= `<p>Voir votre panier: <br>${cartItems.length} articles</p>`;
}
    // Mettre à jour le nombre d'articles dans le panier affiché sur le bouton "voir mon panier"
    updateCartCount();
  });
});



// Ajouter un gestionnaire d'événements au bouton "voir mon panier"
const cartButton = document.querySelector("#panier");
cartButton.addEventListener("click", () => {
  let cartPage = document.querySelector('#div-panier').style.display = 'block'; document.querySelector('#home').style.display = "none";

// Parcourez tous les produits dans le panier et ajoutez-les à la page du panier
const cartAjout = document.querySelector("#achats-total");

// Ajoutez un objet "quantité" à chaque produit dans le panier
function addToCart(product) {
  const existingCartItem = cartItems.find((item) => item.id === product.id);
  if (existingCartItem) {
    existingCartItem.quantity += 1;
  } else {
    cartItems.push({...product, quantity: 1});
  }
}

cartItems.forEach((product) => {
  let cartProduct = document.createElement("div");
  cartProduct.classList.add("achat");
  cartProduct.innerHTML = `
    <img src="${product.image}" alt="${product.description}">
    <p>${product.description}</p>
    <p>${product.price}</p>
    <p>Quantité:${product.quantity}</p>
  `;
  cartAjout.appendChild(cartProduct);
});
  // Ajoutez la page du panier à l'élément body de la page
  document.body.appendChild(cartPage);
});
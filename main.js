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

    // Créez un objet pour représenter le produit et ajoutez-le au tableau du panier
    const product = { image: productImage, description: productDescription, price: productPrice };
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

  cartItems.forEach((product) => {
    let cartProduct = document.querySelector(".achat");
    cartProduct.innerHTML = `
      <img src="${product.image}" alt="${product.description}">
      <p>${product.description}</p>
      <p>${product.price}</p>
    `;
    cartAjout.appendChild(cartProduct);

  })

  // Ajoutez la page du panier à l'élément body de la page
  document.body.appendChild(cartPage);
});













// Créez une page pour afficher les produits ajoutés au panier
  /*let cartPage = document.createElement("div");
  cartPage.style.position = "fixed";
  cartPage.style.top = "15vh";
  cartPage.style.bottom = "10vh";
  cartPage.style.left = "0";
  cartPage.style.width = "100%";
  cartPage.style.height = "75vh";
  cartPage.style.backgroundColor = "yellow";
  cartPage.style.zIndex = "+1";
  cartPage.style.display = "flex";
  cartPage.style.flexDirection = "column";
  cartPage.style.textAlign = "center";
  cartPage.style.alignItems = "center";


  cartItems.forEach((product) => {
    let cartProduct = document.createElement("div");
    cartProduct.innerHTML = `
      <img src="${product.image}" alt="${product.description}">
      <p>${product.description}</p>
      <p>${product.price}</p>
    `;
    cartPage.appendChild(cartProduct);
  });

  // Ajoutez la page du panier à l'élément body de la page
  document.body.appendChild(cartPage);
});*/


/*// Ajouter un gestionnaire d'événements au bouton "voir mon panier"
const cartButton = document.querySelector("#panier");
cartButton.addEventListener("click", () => {
  let cartPage = document.querySelector('#div-panier').style.display = 'block'; document.querySelector('#home').style.display = "none";


  // Parcourez tous les produits dans le panier et ajoutez-les à la page du panier
  cartItems.forEach((product) => {
    let cartProduct = document.querySelector("#achats-total");
    cartProduct.innerHTML = `
      <img src="${product.image}" alt="${product.description}">
      <p>${product.description}</p>
      <p>${product.price}</p>
    `;
    cartPage.appendChild(cartProduct);

  })

  // Ajoutez la page du panier à l'élément body de la page
  document.body.appendChild(cartPage);
});*/
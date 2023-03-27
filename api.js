
// Récupération de l'élément select dans le DOM
const select = document.querySelector('#dropMenu');
const view = document.querySelector('.imgContainer');

// Appel de l'API
fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=20`)
  .then(response => response.json())
  .then(data => {
    // Boucle sur les données récupérées
    data.forEach(item => {
      // Création d'un élément option pour chaque item
      const option = document.createElement('option');
      // Ajout de la valeur et du texte de l'option
      option.value = item.character;
      option.textContent = item.character;
      // Ajout de l'option au select
      select.appendChild(option);
    });
  });

// https://thesimpsonsquoteapi.glitch.me/quotes?character=ho

select.addEventListener("change", () => {
    const characterId = select.value;

    // Effectuer un second appel API Fetch() pour récupérer les informations sur le character sélectionné
    fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${characterId}`)
        .then((response) => response.json())
        .then((character) => {
            // Afficher les informations du character dans la vue character
            view.innerHTML = `<div class="imgContainer">
              <h2>${character[0].character}</h2>
              <p>${character[0].quote}</p>
              <img src="${character[0].image}" alt="${character.character}">
              </div>
            `;
        });
});
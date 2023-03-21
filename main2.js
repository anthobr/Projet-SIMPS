// je cible mes éléments sur le DOM 
const characterList = document.getElementById("dropMenu");
const characterView = document.getElementById("container");

// ref de connexion Api
const characterIds = [333, 76, 74, 79, 80, 184, 71, 68, 72, 73, 67];
const baseUrl = "https://api.sampleapis.com/simpsons/characters/";



characterIds.forEach(id => {
  fetch(baseUrl + id)
    .then(response => response.json())
    .then(character => {
      // Parcourir la liste de characters et ajouter chaque character à la liste d'options
      const option = document.createElement("option");
      option.value = character.id;
      option.textContent = character.normalized_name;
      option.textContent = character.gender;
      option.textContent = character.name;
    
  // Créer un élément img avec l'URL de l'image du personnage
    const img = document.createElement("img");
    img.src = `/images/${character.name}.jpg`; // ou un autre format d'image
    img.alt = character.name;
    img.width = 50; // ou une autre taille

    // Ajouter l'élément img à l'option
    option.appendChild(img);
      characterList.appendChild(option); 
    
    })
  
    .catch(error => {
      console.error(`Erreur lors de la récupération des informations du personnage ${id}: ${error}`);
      console.log(characterList);
    });
});



// Ajouter un eventListener sur la liste d'options pour afficher la vue character correspondante
characterList.addEventListener("change", () => {
  const characterId = characterList.value;

  // Effectuer un second appel API Fetch() pour récupérer les informations sur le character sélectionné
  fetch(baseUrl + characterId)
    .then((response) => response.json())
    .then((character) => {
      // Afficher les informations du character dans la vue character
      characterView.innerHTML = `
        <div class="card col-6 offset-6 m-auto">
          <h2>${character.name}</h2>
          <p>${character.normalized_name}</p>
          <p>${character.gender}</p>
         
        </div>
      `;
    })
    .catch(error => {
      console.error(`Erreur lors de la récupération des informations du personnage ${characterId}: ${error}`);
    });
});
let charactersContainer = document.getElementById("charactacters-container");

async function getData() {
  const url = "https://dragonball-api.com/api/characters?limit=10&page=1";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    json.items.forEach((character) => {
      const characterElement = document.createElement("div");
      characterElement.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
        <p>${character.description}</p>
      `;
      characterElement.classList.add("character-card");
      charactersContainer.appendChild(characterElement);
    });
  } catch (error) {
    console.error(error.message);
  }
}

getData();

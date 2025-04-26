export default function loadMenu() {
    const contentContainer = document.getElementById("content");
    contentContainer.innerHTML = "";

    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Menu";
    contentContainer.appendChild(menuTitle);

    // Beverages section
    const beveragesSection = document.createElement("section");
    beveragesSection.classList.add("beverages");
    const beveragesTitle = document.createElement("h2");
    beveragesTitle.textContent = "Beverages";

    const forestFogContainer = document.createElement("div");
    const forestFogTitle = document.createElement("h3");
    forestFogTitle.textContent = "Forest Fog";
    const forestFogDescription = document.createElement("p");
    forestFogDescription.textContent = `A warm, woodsy twist on a London Fog. 
    Earl Grey tea with steamed oat milk, vanilla, and a hint of pine honey.`
    const forestFogPrice = document.createElement("p");
    forestFogPrice.textContent = "$3";

    forestFogContainer.appendChild(forestFogTitle);
    forestFogContainer.appendChild(forestFogDescription);
    forestFogContainer.appendChild(forestFogPrice);

    const fernBrewContainer = document.createElement("div");
    const fernBrewTitle = document.createElement("h3");
    fernBrewTitle.textContent = "Fern Brew";
    const fernBrewDescription = document.createElement("p");
    fernBrewDescription.textContent = `Our house herbal blend—light, floral, and soothing. 
    Perfect for curling up with a book. Served hot or iced.`
    const fernBrewPrice = document.createElement("p");
    fernBrewPrice.textContent = "$2.50";

    fernBrewContainer.appendChild(fernBrewTitle);
    fernBrewContainer.appendChild(fernBrewDescription);
    fernBrewContainer.appendChild(fernBrewPrice);

    beveragesSection.appendChild(beveragesTitle);
    beveragesSection.appendChild(forestFogContainer);
    beveragesSection.appendChild(fernBrewContainer);

    contentContainer.appendChild(beveragesSection);

    // Sides section
    const sidesSection = document.createElement("section");
    sidesSection.classList.add("sides");
    const sidesTitle = document.createElement("h2");
    sidesTitle.textContent = "Sides";

    const woodlandToastJamContainer = document.createElement("div");
    const woodlandToastJamTitle = document.createElement("h3");
    woodlandToastJamTitle.textContent = "Woodland Toast & Jam";
    const woodlandToastJamDescription = document.createElement("p");
    woodlandToastJamDescription.textContent = `Freshly baked sourdough with your choice of wild blueberry or spruce tip jam.`;
    const woodlandToastJamPrice = document.createElement("p");
    woodlandToastJamPrice.textContent = "$2";

    woodlandToastJamContainer.appendChild(woodlandToastJamTitle);
    woodlandToastJamContainer.appendChild(woodlandToastJamDescription);
    woodlandToastJamContainer.appendChild(woodlandToastJamPrice);

    const foragersFruitCupContainer = document.createElement("div");
    const foragersFruitCupTitle = document.createElement("h3");
    foragersFruitCupTitle.textContent = "Forager’s Fruit Cup";
    const foragersFruitCupDescription = document.createElement("p");
    foragersFruitCupDescription.textContent = `A colorful bowl of seasonal fruits, whatever the forest (and farmer’s market) provides.`;
    const foragersFruitCupPrice = document.createElement("p");
    foragersFruitCupPrice.textContent = "$3";

    foragersFruitCupContainer.appendChild(foragersFruitCupTitle);
    foragersFruitCupContainer.appendChild(foragersFruitCupDescription);
    foragersFruitCupContainer.appendChild(foragersFruitCupPrice);

    sidesSection.appendChild(sidesTitle);
    sidesSection.appendChild(woodlandToastJamContainer);
    sidesSection.appendChild(foragersFruitCupContainer);

    contentContainer.appendChild(sidesSection);

}
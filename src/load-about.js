export default function loadAbout() {
    const contentContainer = document.getElementById("content");
    contentContainer.innerHTML = "";

    const aboutTitle = document.createElement("h1");
    aboutTitle.textContent = "About";
    contentContainer.appendChild(aboutTitle);

    // About section
    const aboutSection = document.createElement("section");
    aboutSection.classList.add("about");
    const introText = document.createElement("p");
    introText.textContent = `At The Fox & Fern Café, we believe that good food should feel like coming home. 
    Nestled in the heart of Forestville, our café is a cozy retreat where rustic charm meets fresh, 
    thoughtfully crafted dishes.`
    const menuText = document.createElement("p");
    menuText.textContent = `Our menu is inspired by the simple beauty of the woods around us—featuring local ingredients, 
    seasonal flavors, and a touch of woodland magic. Whether you’re stopping in for a warm cup of tea, a hearty breakfast, 
    or a sweet treat, we’re here to make every visit feel special.`
    const spaceText = document.createElement("p");
    spaceText.textContent = `We are passionate about creating a welcoming space where friends, families, 
    and wanderers alike can gather, relax, and share delicious moments together.`
    const outroText = document.createElement("p");
    outroText.textContent = `Come sit for a while—you’re always welcome at The Fox & Fern Café.`;

    aboutSection.appendChild(introText);
    aboutSection.appendChild(menuText);
    aboutSection.appendChild(spaceText);
    aboutSection.appendChild(outroText);

    contentContainer.appendChild(aboutSection);
}
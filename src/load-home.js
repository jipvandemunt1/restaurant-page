export default function loadHome() {
    const contentContainer = document.getElementById("content");
    contentContainer.innerHTML = "";

    const cafeTitle = document.createElement("h1");
    cafeTitle.textContent = "The Fox & Fern Café";

    // Happy customer section
    const happyCustomerSection = document.createElement("section");
    happyCustomerSection.classList.add("happy-customer");

    const happyCustomerPara = document.createElement("p");
    happyCustomerPara.textContent = `The Fox & Fern is the coziest little woodland nook for tea and tarts! 
The herbal blends are out of this world, and the pastries taste like they were baked by forest fairies. 
It’s the perfect spot to curl up with a book and watch the world go by through leafy windows. 
I always leave feeling calm and cared for.`;

    const happyCustomerName = document.createElement("p");
    happyCustomerName.textContent = `Red Riding Hood`;

    happyCustomerSection.appendChild(happyCustomerPara);
    happyCustomerSection.appendChild(happyCustomerName);

    // Hours section
    const hoursSection = document.createElement("section");
    hoursSection.classList.add("hours");

    const hoursTitle = document.createElement("h2");
    hoursTitle.textContent = "Hours";

    const hoursList = document.createElement("ul");
    const sundayItem = document.createElement("li");
    sundayItem.textContent = "Sunday: 9am - 6pm";
    const mondayItem = document.createElement("li");
    mondayItem.textContent = "Monday: Closed";
    const tuesdayItem = document.createElement("li");
    tuesdayItem.textContent = "Tuesday: 7am - 5pm";
    const wednesdayItem = document.createElement("li");
    wednesdayItem.textContent = "Wednesday: 7am - 5pm";
    const thursdayItem = document.createElement("li");
    thursdayItem.textContent = "Thursday: 7am - 8pm";
    const fridayItem = document.createElement("li");
    fridayItem.textContent = "Friday: 7am - 8pm";
    const saturdayItem = document.createElement("li");
    saturdayItem.textContent = "Saturday: 9am - 8pm";

    hoursList.append(sundayItem, mondayItem, tuesdayItem, wednesdayItem, thursdayItem, fridayItem, saturdayItem);

    hoursSection.appendChild(hoursTitle);
    hoursSection.appendChild(hoursList);

    // Location section
    const locationSection = document.createElement("section");
    locationSection.classList.add("location");

    const locationTitle = document.createElement("h2");
    locationTitle.textContent = "Location";

    const locationPara = document.createElement("p");
    locationPara.textContent = "77 Meadow Trail, Fernhollow, Vermont";

    locationSection.appendChild(locationTitle);
    locationSection.appendChild(locationPara);

    // Add title and sections to content container
    contentContainer.appendChild(cafeTitle);
    contentContainer.appendChild(happyCustomerSection);
    contentContainer.appendChild(hoursSection);
    contentContainer.appendChild(locationSection);
}
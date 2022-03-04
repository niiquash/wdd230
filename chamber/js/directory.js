const requestURL = "js/data.json";

fetch(requestURL)
    .then((response) => response.json())
    .then((jsonObject) => {
    console.table(jsonObject);
    const businesses = jsonObject["businesses"];
    businesses.forEach(displayBusinesses);
});

function displayBusinesses(business) {
    // Create a section/card
    let card = document.createElement("section");
    let biznesName = document.createElement("p");
    let biznesAddress = document.createElement("p");
    let biznesPhone = document.createElement("p");
    let biznesWebsite = document.createElement("a");

    // Update the textContent of each new element
    biznesName.textContent = `${business.name}`;
    biznesAddress.textContent = `${business.address}`;
    biznesPhone.textContent = `${business.phone}`;
    biznesWebsite.setAttribute('href', business.website);
    
    // Appened list items in p-tags into the section/card
    card.appendChild(biznesName);
    card.appendChild(biznesAddress);
    card.appendChild(biznesPhone);
    card.appendChild(biznesWebsite);

    // Append card to the existing div.
    document.querySelector("div.cards").appendChild(card);
}

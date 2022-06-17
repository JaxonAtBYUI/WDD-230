// Define some constants
const businessesURL = 'https://raw.githubusercontent.com/JaxonAtBYUI/WDD-230/main/data/data.json'
const table = document.getElementsByClassName('table')[0];
const cards = document.getElementsByClassName('cards')[0];

/*//////////////////////////////////////////////////////
/   GET BUSINESSES  
/   Fetch the data.json from the server and return the
/   array of items found within it.
//////////////////////////////////////////////////////*/
async function getBusinesses(requestURL) {
    const response = await fetch(requestURL);
    if (response.ok) {
        const jsonObject = await response.json();
        const businesses = jsonObject['businesses'];
        return businesses
    }
}


/*//////////////////////////////////////////////////////
/   DISPLAY CARDS   
/   Takes a business from JSON and displays it in card
/   format.
//////////////////////////////////////////////////////*/
function displayCards(business) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let url = document.createElement('a');
    let img = document.createElement('img');

    h2.textContent = business.name;
    address.textContent = business.address;
    phone.textContent = business.phone;
    url.setAttribute('href', business.website);
    url.textContent = business.website;
    img.setAttribute('src', business.imageurl);
    img.setAttribute('alt', `${business.name} logo`);
    
    card.appendChild(h2);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(url);
    card.appendChild(img);

    cards.appendChild(card);
}

/*//////////////////////////////////////////////////////
/   DISPLAY TABLE   
/   Takes a business from JSON and displays it in table
/   format.
//////////////////////////////////////////////////////*/
function displayTable(business) {
    // Create the Elements for each column
    let tr = document.createElement('tr');
    let tdName = document.createElement('td');
    let tdAddress = document.createElement('td');
    let tdPhone = document.createElement('td');
    let tdURL = document.createElement('td');
    let aURL = document.createElement('a');
    
    // Assign each element its respective value
    tdName.textContent = business.name;
    tdAddress.textContent = business.address;
    tdPhone.textContent = business.phone;
    aURL.setAttribute('href', business.website);
    aURL.textContent = business.website;

    // Oddball child
    tdURL.appendChild(aURL);

    // Give the row a family :)
    tr.appendChild(tdName);
    tr.appendChild(tdAddress);
    tr.appendChild(tdPhone);
    tr.appendChild(tdURL);

    // Attach row to the table
    table.appendChild(tr);
}

/*//////////////////////////////////////////////////////
/   RESET DISPLAY  
/   Resets each element for the table and cards so that
/   a fresh display can be generated.
//////////////////////////////////////////////////////*/
function reset() {
    table.innerHTML = "";
    cards.innerHTML = "";
}

const businesses = getBusinesses(businessesURL);



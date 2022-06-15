// The URL for the JSON
const prophetsURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json'

async function getProphets(requestURL) {
    const response = await fetch(requestURL);
    if (response.ok) {
        const jsonObject = await response.json();
        console.log(jsonObject);
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphetsCards);
    }
}

function displayProphetsCards(prophet) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let dob = document.createElement('p');
    let pob = document.createElement('p');
    let img = document.createElement('img');

    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    dob.textContent = `${prophet.birthdate}`;
    pob.textContent = `${prophet.birthplace}`;
    img.setAttribute('src', prophet.imageurl);
    img.setAttribute('alt', `${prophet.name} ${prophet.lastname} ${prophet.order}`);
    
    card.appendChild(h2);
    card.appendChild(dob);
    card.appendChild(pob);
    card.appendChild(img);

    document.getElementsByClassName('cards')[0].appendChild(card);
}

function displayProphetsTable(prophet) {
    let list_row = document.createElement('tr');
    let td_name = document.createElement('td');
    td_name.textContent = `${prophet.name} ${prophet.lastname}`;

    let td_birthdate = document.createElement('td');
    td_birthdate.textContent = prophet.birthdate;

    list_row.appendChild(td_name);
    list_row.appendChild(td_birthdate);
    document.getElementsByClassName('table')[0].appendChild(list_row);
}

getProphets(prophetsURL);
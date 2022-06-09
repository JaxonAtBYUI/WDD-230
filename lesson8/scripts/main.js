function toggleNavigation() {
    document.getElementsByClassName("navigation")[0].classList.toggle("displayNavigation");
}

let d = new Date();
const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Meet and greet banner added whenever it is monday or tuesday.
function addMeetAndGreet() {
    header = document.getElementsByTagName('header')[0];
    article = document.createElement('article');
    hr = document.createElement('hr');
    h3 = document.createElement('h3');

    h3.textContent ='🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
    article.classList = 'meetAndGreet';

    article.appendChild(hr);
    article.appendChild(h3);
    header.appendChild(article);
}
if ((1 <= d.getDay()) && (d.getDay() <= 2)) {addMeetAndGreet();}

// Put the current date into the paragraph in the header
document.getElementsByClassName('currentDate')[0].textContent = `${dayOfWeek[d.getDay()]}, ${d.getDate()} ${monthNames[d.getMonth()]} ${d.getFullYear()}`

// Replace the copyright date with the current year.
document.getElementsByClassName('copyrightYear')[0].textContent = d.getFullYear();

// Replace the last modified date with the last date modified.
document.getElementsByClassName('lastModified')[0].textContent = document.lastModified;

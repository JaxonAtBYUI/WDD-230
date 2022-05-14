function toggleNavigation() {
    document.getElementsByClassName("navigation")[0].classList.toggle("displayNavigation");
}

let d = new Date();
const dayOfWeek = ["Sunday", 
                "Monday", 
                "Tuesday", 
                "Wednesday", 
                "Thursday", 
                "Friday", 
                "Saturday"];
const monthNames = ["January", 
                "February", 
                "March", 
                "April", 
                "May", 
                "June", 
                "July", 
                "August", 
                "September", 
                "October", 
                "November", 
                "December"];
// Put the current date into the paragraph in the header
document.getElementsByClassName('currentDate')[0].textContent = `${dayOfWeek[d.getDay()]}, ${d.getDate()} ${monthNames[d.getMonth()]} ${d.getFullYear()}`

// Replace the copyright date with the current year.
document.getElementsByClassName('copyrightYear')[0].textContent = d.getFullYear();

// Replace the last modified date with the last date modified.
document.getElementsByClassName('lastModified')[0].textContent = document.lastModified;

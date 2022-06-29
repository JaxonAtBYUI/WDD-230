let discoverLastVisit = document.getElementById("discoverLastVisit");
let currentDate = new Date();


if ("previousDate" in localStorage) {
    let previousDate = new Date(localStorage.getItem("previousDate"));
    let diffTime = Math.abs(currentDate - previousDate);
    let diffDays = Math.floor(diffTime / 86400000);
    if (diffDays < 1) {
        discoverLastVisit.textContent = "Welcome back to the Shire Chamber of Commerce!"
    }
    else {
        discoverLastVisit.textContent = `Welcome back to the Shire Chamber of Commerce! Its been ${diffDays} since your last visit.`
    }
    localStorage.setItem("previousDate", currentDate)
}
else {
    discoverLastVisit.textContent = "Welcome to the Shire Chamber of Commerce!"
    localStorage.setItem("previousDate", currentDate)
}
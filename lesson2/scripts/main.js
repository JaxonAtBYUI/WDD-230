// Replace the copyright date with the current year.
let d = new Date();
document.getElementById('year').textContent = d.getFullYear();

// Replace the last modified date with the last date modified.
document.getElementById('date').textContent = document.lastModified;
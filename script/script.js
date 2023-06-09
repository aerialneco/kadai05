
const help = document.querySelector("#help");
const details = document.querySelector("#details");

// Mouse hover
help.addEventListener('mouseover', () => {
    details.style.display = 'block';
}, false);

// Mouse off
help.addEventListener('mouseleave', () => {
    details.style.display = 'none';
}, false);


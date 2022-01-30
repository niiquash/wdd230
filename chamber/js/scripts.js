const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById("currentdate").innerHTML = new Date().toLocaleDateString('en-US', options);
document.getElementById("headerdate").innerHTML = new Date().toLocaleDateString('en-US', options);

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById("navBtn");
x.onclick = toggleMenu;
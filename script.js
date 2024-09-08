const btn = document.querySelector('button');
const btnToggle = document.querySelector('.toggle-btn');

function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle('dark-mode');
    btn.classList.toggle('btn-dark-mode');
}

btn.addEventListener('mousedown', function () {
    this.style.transform = "scale(0.9)";
});

btn.addEventListener('mouseup', function () {
    this.style.transform = "scale(1)";
});

btnToggle.addEventListener('click', function() {
    toggleDarkMode();
    
    if (btn.innerText === 'Dark Mode') {
        btn.innerText = 'Light Mode'
    } else {
        btn.innerText = "Dark Mode";
    }
});


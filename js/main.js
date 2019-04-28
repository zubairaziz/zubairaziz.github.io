// Select DOM items
const menuBtn = document.querySelector('.menu-btn');
const navItems = document.querySelectorAll('.nav-item');
const bgImg = document.querySelector('.bg-img');
let showMenu = false;
let currentFileName = currentFile();

asyncToggle();

menuBtn.addEventListener('click', menuClick);
navItems[0].addEventListener('click', menuClick);
navItems[1].addEventListener('click', menuClick);
navItems[2].addEventListener('click', menuClick);
navItems[3].addEventListener('click', menuClick);

menuBtn.addEventListener('click', toggleBg);
navItems[0].addEventListener('click', toggleBg);
navItems[1].addEventListener('click', toggleBg);
navItems[2].addEventListener('click', toggleBg);
navItems[3].addEventListener('click', toggleBg);

function resolvePromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 10);
    });
}

async function asyncToggle() {
    const result = await resolvePromise();
    console.log(result);
    toggleBg();
}

function toggleBg() {
    currentFileName = currentFile();
    if (currentFileName !== '') {
        bgImg.classList.remove('bg-img');
        currentFileName = currentFile();
    } else {
        bgImg.classList.add('bg-img');
        currentFileName = currentFile();
    }
}

function currentFile() {
    const URL = window.location.href;
    const fileNameIndex = URL.lastIndexOf('/') + 1;
    const fileName = URL.substr(fileNameIndex);
    return fileName;
}

function menuClick() {
    if (!showMenu) {
        showMenu = true;
        asyncToggle();
    } else {
        showMenu = false;
        asyncToggle();
    }
}

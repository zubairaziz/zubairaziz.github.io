// Select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBrand = document.querySelector('.menu-brand');

const navItems = document.querySelectorAll('.nav-item');
const className = 'show';

const bgImg = document.querySelector('.bg-img');

let showMenu = false;
let currentFileName = currentFile();

asyncCall();

menuBtn.addEventListener('click', toggleMenu);
navItems[0].addEventListener('click', toggleMenu);
navItems[1].addEventListener('click', toggleMenu);
navItems[2].addEventListener('click', toggleMenu);
navItems[3].addEventListener('click', toggleMenu);

menuBtn.addEventListener('click', toggleBg);
navItems[0].addEventListener('click', toggleBg);
navItems[1].addEventListener('click', toggleBg);
navItems[2].addEventListener('click', toggleBg);
navItems[3].addEventListener('click', toggleBg);

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 50);
    });
}

async function asyncCall() {
    console.log('calling');
    var result = await resolveAfter2Seconds();
    console.log(result);
    toggleBg();
    // expected output: 'resolved'
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
    let URL = window.location.href;
    let fileNameIndex = URL.lastIndexOf("/") + 1;
    let currentFileName = URL.substr(fileNameIndex);
    return currentFileName;
}

function toggleMenu() {

    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBrand.classList.add('show');
        for (let i = 0; i < navItems.length; i++) {
            if ((' ' + navItems[i].className + ' ').indexOf(' ' + className + ' ') < 0) {
                navItems[i].className += ' ' + className;
            }
        }

        showMenu = true;
        asyncCall();
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBrand.classList.remove('show');
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].classList.remove(className);
        }

        showMenu = false;
        asyncCall();
    }
}
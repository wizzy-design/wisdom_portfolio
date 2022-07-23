// Menu show Y hidden
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close');

// Show
toggleMenu.addEventListener("click", ()=> {
    navMenu.classList.toggle('show');
})

// Hidden
closeMenu.addEventListener("click", ()=> {
    navMenu.classList.remove('show');
})

// Remove Menu
const navLink = document.querySelectorAll(".nav_link");

linkAction = () => {
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// Scroll sections active link
const sections = document.querySelectorAll('section[id]');

windows.addEventListener('scroll', scrollActive);

scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop +sectionHeight){
            document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.add('active');
        }else{
            document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.remove('active');
        }
    })
}

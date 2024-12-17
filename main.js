// // NavBar

//Scroll seconda navbar
let secondNav = document.querySelector(".secondNav");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (window.innerWidth < 600) {
        let currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            // Scroll verso il basso - nascondi la navbar
            secondNav.style.transform = "translateY(-250px)";
        } else {
            // Scroll verso l'alto - mostra la navbar
            secondNav.style.transform = "translateY(-100px)";
        }

        lastScrollY = currentScrollY;
    }
});

window.addEventListener("scroll", () => {
    // Verifica se il dispositivo è in orientamento orizzontale e se la larghezza è inferiore a 600px
    if (window.matchMedia("(max-width: 760px) and (orientation: landscape)").matches) {
        let currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            // Scroll verso il basso - nascondi la navbar
            secondNav.style.transform = "translateY(-250px)";
        } else {
            // Scroll verso l'alto - mostra la navbar
            secondNav.style.transform = "translateY(-100px)";
        }

        lastScrollY = currentScrollY;
    }
});

// Click e reindirizzamento a sezione home tramite il tasto home
let buttonHome = document.querySelector('#buttonHome');

document.getElementById('buttonHome').addEventListener('click', function() {
    let pixel = 0; // Sostituisci con il pixel desiderato
    window.scrollTo({
        top: pixel,
        behavior: 'smooth'
    });
});

// Click e reindirizzamento a sezione home tramite nome 
let buttonHome1 = document.querySelector('#buttonHome1');

document.getElementById('buttonHome1').addEventListener('click', function() {
    let pixel = 0; // Sostituisci con il pixel desiderato
    window.scrollTo({
        top: pixel,
        behavior: 'smooth'
    });
});

// Click e reindirizzamento a sezione menu
let buttonMenu = document.querySelector('#buttonMenu');

document.getElementById('buttonMenu').addEventListener('click', function() {
    let pixel = 1352; // Sostituisci con il pixel desiderato
    window.scrollTo({
        top: pixel,
        behavior: 'smooth'
    });

    if (window.innerWidth < 600){
        let pixel = 1275; // Sostituisci con il pixel desiderato
    window.scrollTo({
        top: pixel,
        behavior: 'smooth'
    });
    }

    if (window.matchMedia("(max-width: 760px) and (orientation: landscape)").matches) {
        let pixel = 916; // Sostituisci con il pixel desiderato
    window.scrollTo({
        top: pixel,
        behavior: 'smooth'
    });
    }

});

// Click e reindirizzamento a sezione storia tramite il logo
let buttonStoria = document.querySelector('#buttonStoria');

document.getElementById('buttonStoria').addEventListener('click', function() {
    let pixel = 848; // Sostituisci con il pixel desiderato
    window.scrollTo({
        top: pixel,
        behavior: 'smooth'
    });

    if (window.innerWidth < 600){
        let pixel = 707; // Sostituisci con il pixel desiderato
    window.scrollTo({
        top: pixel,
        behavior: 'smooth'
    });
    }

    if (window.matchMedia("(max-width: 760px) and (orientation: landscape)").matches) {
        let pixel = 330; // Sostituisci con il pixel desiderato
    window.scrollTo({
        top: pixel,
        behavior: 'smooth'
    });
    }

});

// Click e reindirizzamento a sezione galleria
let buttonGalleria = document.querySelector('#buttonGalleria');

document.getElementById('buttonGalleria').addEventListener('click', function() {
    let pixel = 2527; // Sostituisci con il pixel desiderato
    window.scrollTo({
        top: pixel,
        behavior: 'smooth'
    });

    if (window.innerWidth < 600){
        let pixel = 1643; // Sostituisci con il pixel desiderato
    window.scrollTo({
        top: pixel,
        behavior: 'smooth'
    });
    }

    if (window.matchMedia("(max-width: 760px) and (orientation: landscape)").matches) {
        let pixel = 1550; // Sostituisci con il pixel desiderato
    window.scrollTo({
        top: pixel,
        behavior: 'smooth'
    });
    }

});

// Click e reindirizzamento a sezione contatti
let buttonContatti = document.querySelector('#buttonContatti');

document.getElementById('buttonContatti').addEventListener('click', function() {
    let pixel = 3200; // Sostituisci con il pixel desiderato
    window.scrollTo({
        top: pixel,
        behavior: 'smooth'
    });

    if (window.matchMedia("(max-width: 760px) and (orientation: landscape)").matches) {
        let pixel = 1958; // Sostituisci con il pixel desiderato
    window.scrollTo({
        top: pixel,
        behavior: 'smooth'
    });
    }

});
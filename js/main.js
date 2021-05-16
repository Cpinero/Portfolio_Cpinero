const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".navbar__menu");
const links = document.querySelector(".navbar__links");
const sections = document.querySelectorAll("section");
const config = {
    rootMargin: "0px",
    threshold: [0.6, 0.9],
};

function handleLlinks() {
    if (window.innerWidth <= 991) {
        links.classList.toggle("visible");
    }
}

function intersectionHandler(entry) {
    const id = entry.target.id;
    const currentlyActive = document.querySelector(".navbar__links  .active");
    const shouldBeActive = document.querySelector(
        ".navbar__links [data-ref=" + id + "]"
    );

    if (currentlyActive) {
        currentlyActive.classList.remove("active");
    }
    if (shouldBeActive) {
        shouldBeActive.classList.add("active");
    }
}

menu.addEventListener("click", handleLlinks);
links.addEventListener("click", handleLlinks);

window.addEventListener("scroll", function() {
    if (localStorage.getItem('light-mode') == 'true') {
        window.scrollY > 100 && (navbar.style.background = `rgba(255,255,255,1)`);
    } else {
        window.scrollY > 100 && (navbar.style.background = `rgba(0,0,0,0.9)`);
    }
    window.scrollY < 100 && (navbar.style.background = `transparent`);
});

let observer = new IntersectionObserver(function(entries, self) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            intersectionHandler(entry);
        }
    });
}, config);

sections.forEach((section) => {
    observer.observe(section);
});




// Libreria ScrollReveal

ScrollReveal().reveal(".navbar", { delay: 250 });
ScrollReveal().reveal(".home__profile", { delay: 350 });
ScrollReveal().reveal(".home__title--primary", { delay: 350 });
ScrollReveal().reveal(".home__title", { delay: 450 });
ScrollReveal().reveal(".home__title--secondary", { delay: 550 });
ScrollReveal().reveal(".section__title", { delay: 250 });
ScrollReveal().reveal(".section__subtitle", { delay: 350 });
ScrollReveal().reveal(".about__description", { delay: 350 });
ScrollReveal().reveal(".about__summary", { delay: 450 });
ScrollReveal().reveal(".button--cta", { delay: 550 });
ScrollReveal().reveal(".skill__title", { delay: 450 });
ScrollReveal().reveal(".skill__item", { delay: 450 });
ScrollReveal().reveal(".services__item", { delay: 450 });
ScrollReveal().reveal(".portfolio__item", { delay: 450 });
ScrollReveal().reveal(".contact__item", { delay: 450 });
//ScrollReveal().reveal(".footer", { delay: 450 });


//Modo Oscuro
const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('light');
    btnSwitch.classList.toggle('switched');

    // Guardamos el modo en localstorage
    if (document.body.classList.contains('light')) {
        localStorage.setItem('light-mode', 'true');
        navbar.style.background = `rgba(255,255,255,0.9)`;
    } else {
        localStorage.setItem('light-mode', 'false');
        navbar.style.background = `rgba(0,0,0,0.9)`
    }

});

//Obtenemos el modo actual
if (localStorage.getItem('light-mode') == 'true') {
    document.body.classList.add('light');
    btnSwitch.classList.add('switched');
} else {
    document.body.classList.remove('light');
    btnSwitch.classList.remove('switched');
}
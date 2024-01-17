// fonction qui gere le défilement des avis clients
function scrollTestimonials() {
    const container = document.querySelector('.testimonials-container');
    // Vitesse de défilement
    container.scrollLeft += 1.5;

    if (container.scrollWidth === container.scrollLeft + container.clientWidth) {
        container.scrollLeft = 0;
    }
}

setInterval(scrollTestimonials, 30);

// fonction qui permet de scroll des cartes de services vers le formulaire de prise de contact
function scrollToService(serviceId) {
    const element = document.getElementById(serviceId);

    if (element) {
        // Scroll lisse
        element.scrollIntoView({ behavior: "smooth" });
    }
}


document.addEventListener('scroll', function () {
    var filterBar = document.getElementById('filter-bar');
    var carsSection = document.getElementById('cars').offsetTop;
    var teamSection = document.getElementById('team').offsetTop;

    // Condition d'affichage ou de disparition de la barre de filtre
    if (window.pageYOffset >= carsSection && window.pageYOffset < teamSection) {
        // on affiche la barre
        filterBar.classList.remove('filter-bar-hidden');
    } else {
        // on masque la barre
        filterBar.classList.add('filter-bar-hidden');
    }
});

// Fonction pour afficher le modal
function openModal() {
    document.getElementById("loginModal").style.display = "block";
}

// Fonction pour masquer le modal
function closeModal() {
    document.getElementById("loginModal").style.display = "none";
}

// Afficher le modal lorsque l'utilisateur clique sur "Se connecter"
document.querySelector("nav a[href='#login']").addEventListener("click", openModal);

// Masquer le modal lorsque l'utilisateur clique en dehors du modal
window.addEventListener("click", function (event) {
    if (event.target == document.getElementById("loginModal")) {
        closeModal();
    }
});

// Soumettre le formulaire de connexion (vous pouvez ajouter la logique de connexion ici)
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    // Ajoutez ici la logique de connexion (vérification de l'email et du mot de passe, etc.)
    // Si la connexion réussit, vous pouvez rediriger l'utilisateur vers la page appropriée.
    // Sinon, affichez un message d'erreur.
    closeModal();
});

// Attendez que le chargement complet de la page soit terminé
window.addEventListener("load", function () {
    // Obtenez l'élément audio par son ID
    var audio = document.getElementById("myAudio");

    // Jouez le son
    audio.play();
});

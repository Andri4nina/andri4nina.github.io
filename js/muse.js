/* document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;

    function updateBackground() {
        const now = new Date();
        const hours = now.getHours();

        if (hours >= 5 && hours < 7) {
            // Aube
            body.style.backgroundColor = `rgb(135, 206, 250, ${((hours - 5) / 2).toFixed(2)})`;
        } else if (hours >= 7 && hours < 18) {
            // Jour
            body.style.backgroundColor = "#87CEFA";
        } else if (hours >= 18 && hours < 20) {
            // Crépuscule du soir
            body.style.backgroundColor = `rgb(135, 206, 250, ${((20 - hours) / 2).toFixed(2)})`;
        } else {
            // Nuit noire
            body.style.backgroundColor = "#000";
        }
    }

    // Appeler la fonction lors du chargement de la page
    updateBackground();

    // Mettre à jour le fond toutes les 30 minutes
    setInterval(updateBackground, 30 * 60 * 1000);
}); */

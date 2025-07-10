document.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash.substring(1);
    if (hash) {
        const el = document.getElementById(hash);
        if (el && el.classList.contains("speaker-full-card")) {
            el.classList.add("highlighted");

            // Scrolla centrando la card nello schermo
            el.scrollIntoView({ behavior: "smooth", block: "start" });

            // Rimuovi evidenziazione dopo 1 secondo
            setTimeout(() => {
                el.classList.remove("highlighted");
                history.replaceState(null, null, window.location.pathname); // pulisce l’URL
            }, 1000);
        }
    }
});
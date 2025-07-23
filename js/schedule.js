document.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash.substring(1);
    if (hash.startsWith("speaker-")) {
        const el = document.getElementById(hash);
        if (el && el.classList.contains("speaker-card")) {
            el.classList.add("highlighted-speaker");

            // Scrolla centrando la card nello schermo
            el.scrollIntoView({ behavior: "smooth", block: "center" });

            // Rimuovi l'evidenziazione dopo 1 secondo
            setTimeout(() => {
                el.classList.remove("highlighted-speaker");
                history.replaceState(null, null, window.location.pathname); // pulisce l’URL
            }, 1000);
        }
    }
});

function toggleOpen(badgeEl) {
    const container = badgeEl.closest('.schedule-slot');
    const description = container.querySelector('.open-description-container');

    if (description.classList.contains('expanded')) {
        description.classList.remove('expanded');
        badgeEl.classList.remove('active');
    } else {
        description.classList.add('expanded');
        badgeEl.classList.add('active');
    }
}
// document.addEventListener("DOMContentLoaded", function () {
//     const faders = document.querySelectorAll('.fade-in');
//     const appearOptions = {
//         threshold: 0.1,
//         rootMargin: "0px 0px 0px 0px"
//     };

//     const appearOnScroll = new IntersectionObserver(function (entries, observer) {
//         entries.forEach(entry => {
//             if (!entry.isIntersecting) return;
//             entry.target.classList.add("visible");
//             observer.unobserve(entry.target);
//         });
//     }, appearOptions);

//     faders.forEach(el => {
//         appearOnScroll.observe(el);
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // evita che si riattivi
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
});
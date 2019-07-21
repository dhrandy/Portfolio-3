window.sr = ScrollReveal();
//Navbar
sr.reveal('.me', {
    duration: 2000,
    origin: 'bottom'
})
sr.reveal('.nav', {
    duration: 2000,
    origin: 'bottom',
    mobile: false
})
//Image of me
sr.reveal('#meImage', {
    duration: 2000,
    origin: 'left',
    distance: '150px'
})
//Knowledge Icons
sr.reveal('.fa-code', {
    duration: 2000,
    origin: 'left',
    distance: '200px'
})
sr.reveal('.fa-css3-alt', {
    duration: 2000,
    origin: 'top',
    distance: '200px'
})
sr.reveal('.fa-js', {
    duration: 2000,
    origin: 'bottom',
    distance: '200px'
})
sr.reveal('.fa-database', {
    duration: 2000,
    origin: 'right',
    distance: '200px'
})
//Contact Image
sr.reveal('.fa-envelope', {
    duration: 1000,
    origin: 'left',
    distance: '100px'
})
sr.reveal('.img-fluid', {
    duration: 1500
}, 100)

//Sections - Removed when I added parallax
sr.reveal('#about-container-reveal', {
    // reset: true,
    mobile: false
})
sr.reveal('#knowledge-section', {
    // reset: true,
    mobile: false
})
sr.reveal('#portfolio-container-reveal', {
    // reset: true,
    mobile: false
})
sr.reveal('.hobby-section-reveal', {
    // reset: true,
    mobile: false
})
sr.reveal('.contact-container-reveal', {
    // reset: true,
    mobile: false
})
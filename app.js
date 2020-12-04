const hamburger = document.querySelector('.hamburger__menu');
const navMenu = document.querySelector('.nav__menu');
const iconX = document.querySelector('.icon__x');
const fadeLeft = document.querySelectorAll('.fade__left')
const fadeRight = document.querySelectorAll('.fade__right')
const fadeIn = document.querySelectorAll('.fadein')


hamburger.addEventListener('click', () =>{
    navMenu.classList.toggle('showMenu');   
})

iconX.addEventListener('click', () =>{
    navMenu.classList.toggle('showMenu');   
})


const appearOptions = {
    rootMargin: "0px 0px -200px 0px"
};
const appearOnScroll = new IntersectionObserver(
    (entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting){
                return;
            } else{
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
    appearOptions);

    fadeLeft.forEach( fader => appearOnScroll.observe(fader));
    fadeRight.forEach( fader => appearOnScroll.observe(fader));
    // fadeIn.forEach(fader => appearOnScroll.observe(fader));

 

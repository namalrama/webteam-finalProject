// Change navbar style on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})

// Show/hide faq answer
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //Cnange Icon to -
        const icon = faq.querySelector('.faq-icon i');
        if(icon.className === "uil uil-plus-square"){
            icon.className = "uil uil-minus-square-full";
        } else {
            icon.className = "uil uil-plus-square";
        }   
    }) 
})

//Show/hide nav menu
const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click',() =>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// Close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);
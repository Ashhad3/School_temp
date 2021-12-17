function responsivenav() {

    let burger = document.querySelector('.burger');
    let navLogo = document.querySelector('.logo-ul');
    let navMenu = document.querySelector('.menu');
    let links = document.querySelector('.links');
    
    let navLeftside = document.querySelector('.nav-resp');
   


    burger.addEventListener("click",e =>{
     
       
        navLeftside.classList.toggle('nav-resp-open')
        navLogo.classList.toggle('logo-ul-resp');
        navMenu.classList.toggle('menu-resp');
        burger.classList.toggle('burger-resp')
        links.classList.toggle('links-resp')
    });

    
}
responsivenav();
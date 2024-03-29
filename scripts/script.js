let navBtnOpen=false;
const $=document;
const navBtn= $.querySelector(".nav__btn");
const navMenu= $.querySelector(".nav-menu");

navBtn.addEventListener("click",()=>{
    if(navBtnOpen==false){
        navBtn.classList.add("nav__btn--open");
        navMenu.classList.add("nav-menu--open");
        navBtnOpen=true;
    }
    else{
        navBtn.classList.remove("nav__btn--open");
        navMenu.classList.remove("nav-menu--open");
        navBtnOpen=false;
    }  
})
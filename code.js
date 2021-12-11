

// Start Search page
let searchIcon=document.querySelector(".openSearch");
let close =document.querySelector(".search-lay .close");
searchIcon.onclick=function(){
    document.querySelector(".search-lay").style.cssText="height:100vh;";
    document.querySelector(".search-lay .content").style.cssText="opacity:1";
    close.style.cssText="display:flex";
};
close.addEventListener("click",function(){
        document.querySelector(".search-lay").style.cssText="height:0;";
        document.querySelector(".search-lay .content").style.cssText="opacity:0";
        close.style.cssText="display:none";
});
// End Search page
// Start Show Nav
let showNav=document.querySelector(".showNav");
let icconShow=document.querySelector(".showNav i");
let op=0;
showNav.addEventListener("click",function(){
    op= op==0?1:0;
    document.querySelector("header .nav ul").style.cssText=`opacity:${op}`;
    icconShow.className= icconShow.className=="fas fa-bars"?"fas fa-times close":"fas fa-bars";
});
// End Show Nav
// Start Move between image in home page
let sp1=document.querySelector(".first");
let sp2=document.querySelector(".second");
let sp3=document.querySelector(".third");
sp1.addEventListener("click",function(){
    sp1.style.cssText="background-color:#27ae60";
    sp2.style.cssText="background-color: transparent;";
    sp3.style.cssText="background-color: transparent;";
    document.querySelector(".home .container .movement").style.cssText="transform: translateX(0);";
});
sp2.addEventListener("click",function(){
    sp1.style.cssText="background-color: transparent;";
    sp2.style.cssText="background-color:#27ae60";
    sp3.style.cssText="background-color: transparent;";
    document.querySelector(".home .container .movement").style.cssText="transform: translateX(-102%);";
});
sp3.addEventListener("click",function(){
    sp1.style.cssText="background-color: transparent;";
    sp2.style.cssText="background-color: transparent;";
    sp3.style.cssText="background-color:#27ae60";
    document.querySelector(".home .container .movement").style.cssText="transform: translateX(-204%);";
});
// End Move between image in home page
// Start Scroll Nav
let list=document.querySelectorAll("header .nav ul li a");
console.log(list);
let home=document.getElementById("home");
let home_height=parseInt(getComputedStyle(home).height);
let dishes=document.getElementById("dishes");
let dishes_height=parseInt(getComputedStyle(dishes).height);
let about=document.getElementById("about");
let about_height=parseInt(getComputedStyle(about).height);
let menu=document.getElementById("menu");
let menu_height=parseInt(getComputedStyle(menu).height);
let review=document.getElementById("review");
let review_height=parseInt(getComputedStyle(review).height);
let order=document.getElementById("order");
let order_height=parseInt(getComputedStyle(order).height);
window.onscroll=function(){
    if(window.scrollY<home_height){
        for(let i=0;i<list.length;i++){
            list[i].classList.remove("active");
        };
        list[0].classList.add("active");
}
    if(window.scrollY>=home_height){
            for(let i=0;i<list.length;i++){
                list[i].classList.remove("active");
            };
            list[1].classList.add("active");
    }
    if(window.scrollY>=( home_height + dishes_height)){
        for(let i=0;i<list.length;i++){
            list[i].classList.remove("active");
        };
        list[2].classList.add("active");
    }
    if(window.scrollY>=( home_height + dishes_height + about_height)){
        for(let i=0;i<list.length;i++){
            list[i].classList.remove("active");
        };
        list[3].classList.add("active");
    }
    if(window.scrollY>=( home_height + dishes_height + about_height + menu_height)){
        for(let i=0;i<list.length;i++){
            list[i].classList.remove("active");
        };
        list[4].classList.add("active");
    }
    if(window.scrollY>=( home_height + dishes_height + about_height + menu_height + review_height)){
        for(let i=0;i<list.length;i++){
            list[i].classList.remove("active");
        };
        list[5].classList.add("active");
    }
};
// End Scroll Nav
document.querySelector("form.parent").onsubmit=function(e){
    e.preventDefault();
};
// Start Up Scroll
let up=document.getElementById("up");
window.onscroll=function(){
    if(window.scrollY>500){
        up.style.cssText="display:flex";
    }
    else{
        up.style.cssText="display:none";
    }
};
up.onclick=function(){
    window.scroll({
        top:0,left:0,behavior:"smooth"
    });
}; 
// End Up Scroll
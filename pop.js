window.addEventListener('scroll',function(){
    const nav=this.document.querySelector('nav')
    nav.classList.toggle("stickly",window,this.scrollY>0);
})

const navbar=document.querySelectorAll('.navbar');
const collapse=document.querySelector('.navbar-collapse.collapse');
navbar.forEach(function(a){
    a.addEventListener("click",function(){
        collapse.classList.remove("show");
    })
})
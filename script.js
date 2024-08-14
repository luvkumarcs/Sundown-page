const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});

function animationpage3(){
 let fixed=document.querySelector(".fixed")
let element=document.querySelectorAll(".element")
let container=document.querySelector(".container")

container.addEventListener("mouseenter", function(){
    fixed.style.display="block";
})

container.addEventListener("mouseleave", function(){
    fixed.style.display="none";
})

element.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        let img=e.getAttribute("img")
        fixed.style.backgroundImage=`url(${img})`
        
        
    })
})
}

animationpage3();

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: false,
    spaceBetween: 60,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  });


  let loader=document.querySelector(".loader")
  setTimeout(function(){
    loader.style.top="-100%"

  },4000)
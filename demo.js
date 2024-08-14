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
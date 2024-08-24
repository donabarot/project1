
var crsr = document.querySelector("#cursor") 
var blur = document.querySelector("#cursor-blur") //querySelector is used to access a div from html to js
document.addEventListener("mousemove",function(dets){ //dets is a parameter we pass in a function to check mousemovements
    crsr.style.left = dets.x+"px",
    crsr.style.top = dets.y+"px" 
    blur.style.left = dets.x-200+"px",
    blur.style.top = dets.y-200+"px"
})

gsap.to("#nav",{
    backgroundColor : "#c6f020",
    durarion: 1,
    delay:1,
    height:"70px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2,
    }
})



gsap.to(".blur", {
    backdropFilter: "blur(50px)",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        markers: true,
        start: "top -75%",
        end: "top -100%",
        scrub: 1.5,
    }
});

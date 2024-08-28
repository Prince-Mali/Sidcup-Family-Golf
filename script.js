var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#blur-cursor");
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x - 10 + "px";
    crsr.style.top = dets.y - 10 + "px";
    blur.style.left = dets.x - 200 + "px";
    blur.style.top = dets.y - 200 + "px";
})



gsap.to("#nav",{
    backgroundColor: "black",
    height: "120px",
    duration: 0.3,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
});

gsap.to("#main",{
    backgroundColor: "black",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -80%",
        scrub: 2,
    }
})

var h4all = document.querySelectorAll("#nav h4");

h4all.forEach(function (el) {
    el.addEventListener("mouseenter",function () {
        crsr.style.scale = 4;
        crsr.style.border = "0.1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });
    el.addEventListener("mouseleave",function () {
        crsr.style.scale = 1;
        crsr.style.border = 0;
        crsr.style.backgroundColor = "#95C11E"

    })
})


gsap.from("#page4 h2",{
    y:50,
    scrollTrigger: {
        trigger: "#page4 h2",
        scroller: "body",
        start: "top 110%",
        end: "top 100%",
        scrub: 2,
    }
})

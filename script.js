// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

// gsap.registerPlugin(ScrollTrigger);

// function navbarAnimation() {
//     gsap.to("#nav-pt2 #links", {
//         transform: 'translateY(-100%)',
//         opacity: 0,
//         scrollTrigger: {
//             trigger: "#page1",
//             scroller: "#main",
//             start: "top 0",
//             end: "top -5%",
//             scrub: true
//         }
//     })
// }
// navbarAnimation()

function videoconAnimation() {
    var vdcon = document.querySelector("#video-container")
    var playbtn = document.querySelector("#play")

    vdcon.addEventListener("mouseenter", function () {
        gsap.to(playbtn, {
            scale: 1,
            opacity: 1
        })
    })

    vdcon.addEventListener("mouseleave", function () {
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0
        })
    })

    vdcon.addEventListener("mousemove", function (dets) {
        gsap.to(playbtn, {
            left: dets.x - 80,
            top: dets.y - 70
        })
    })
}
videoconAnimation()

function loadAnimation() {
    gsap.from("#main h1", {
        y: 100,
        opacity: 0,
        delay: 0.6,
        duration: 1.2,
        stagger: 0.4
    })
    gsap.from("#video-container video", {
        scale: 0.9,
        opacity: 0,
        delay: 1.5,
        duration: 1.2
    })
}
loadAnimation()

function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
            left: dets.x,
            top: dets.y
        })
    })

    document.querySelector("#highlight").addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
            transform: 'translate(-50%,-50%) scale(1)'
        })
    })

    document.querySelector("#highlight").addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
            transform: 'translate(-50%,-50%) scale(0)'
        })
    })
}
cursorAnimation()



document.querySelectorAll('img.btn').forEach(el =>el.addEventListener("click",function () {
    var icon = this
    console.log(icon)
    if (icon.src.match("/img/INTERACTIVE-PLUS.png") ) {
        icon.src = "/img/INTERACTIVE-CLOSE.png";
    } 
    else {
        icon.src = "/img/INTERACTIVE-PLUS.png";
    }
}))

//animació amb gsap : metode 1 selecciona directament cada element
//metode 2 utilitza timeline per encadenar efectes/ "-=2 per adelantar l'efecte"

// gsap.from('.anim1',{opacity:0, duration:1, y: -50, stagger:0.6});
// gsap.from('img',{duration:1, y:30,opacity:0, delay: 0.6})



var tl = gsap.timeline({defaults:{duration: 2},repeat:-1, repeatDelay: 2})

// timeline normal

// tl.from(".anim1",{y: -50, stagger:.6, opacity: 0})
// .from('img',{duration:1, y:30,opacity:0, delay: 0.6},"-=1").from(".anim2",{y:30,opacity:0})

tl.from("#d2_d1",{y: -50, stagger:.6, opacity: 0})
.from("#d2_d2",{duration:1, y:30,opacity:0, delay: 0.6},"-=1").from("#d2_d3",{opacity:0},"-=2")

// gsap.from('img',{duration:1.2,y: -50, opacity: 0})


//al clicar el botó es fa un reverse al timeline
// linia logica: esta reversed? then play if not (:) reverse
// document.getElementById('cta').addEventListener("click",function () {
//     tl.reversed() ? tl.play() : tl.reverse(); 
// })

///////// practica 2

// gsap.to('.a',{x:400,rotation: 360, duration :3});
// gsap.to('.c',{
//     scrollTrigger: {
//         trigger: '.c', // d'esdon s'activa
//         toggleActions: "play pause reverse none", // inici perdre_de_vista tornar final_pag
//         start: "top center",
//         markers: true, // per veure on comença i acaba
//         // scrub:.4
//     },
//     x:400,
//     rotation: 360,
//     duration :3
//     });
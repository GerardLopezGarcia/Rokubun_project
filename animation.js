// avoid dragging img & texts
$('img,h4,h1').on('dragstart', function(event) { event.preventDefault(); });

// first pop up
$('#pop_up_btn1').click(()=>{
    var pop_up =     `<div id="pop_up1" class="pop_up">
    <h6 class="popTitle_1"><span style="color: rgba(255,255,255,255);">S</span>atellite <span style="color: rgba(255,255,255,255);">P</span>ositioning <span style="color: rgba(255,255,255,255);">E</span>ngine for <span style="color: rgba(255,255,255,255);">A</span>ccurate <span style="color: rgba(255,255,255,255);">R</span>eal-time <span style="color: rgba(255,255,255,255);">N</span>avigation</h6>
    <p class="popDescription_1">SPEAR is a software library for accurate and robust navigation. It is a platform-agnostic location stack that bridges the gap between GNSS chipset (or SoC,SoP...) and high-level precise navigation solution. SPEAR is specially designed to get the best navigation performance of mass-market or industrial GNSS devices, achieving centimeter to decimeter accuracy depending on the hardware platform.</p>
    <img src="/img/INTERACTIVE-CLOSE.png" class="btn s2_close">
    </div>`
    $('.content').append(pop_up);
    $('.s2_close').click(()=>{
        $('#pop_up1').remove();
    });
});
//pop up cases section 3
$('img.btn').click(function(e){
    var clicked = $(e.target)
    switch (clicked.attr('id')) {
        case 'pop_up_btn2':
            var pop_up = `<div id="pop_up2" class="pop_up2">
            <h6 class="pop2Title_1">Road Navigation</h6>
            <p class="pop2Description_1">SPEAR is embedded in vehicle navigation On-Board Units (OBU) to deliver lane-lever navigation for IVS, ADAS, and autonomous driving applications. SPEAR leverages complementary sensors (IMU, dead reckoning...) and GNSS corrections streaming to get the best possible vehicle navigation solution.</p>
            <img src="/img/INTERACTIVE-CLOSE.png" class="btn s3_close">`
            $('.content').append(pop_up);
            $('.s3_close').click(()=>{
                $('#pop_up2').remove();
            });
            break;
        case 'pop_up_btn3':
            var pop_up = `<div id="pop_up2" class="pop_up2">
            <h6 class="pop2Title_1">Robotics</h6>
            <p class="pop2Description_1">Autonomus robotics that relies on precise location information for operations such as automated delivery, drones, or unmanned vehicles will find in SPEAR the tool to get the best navigation performance possible out of their navigation on-board unit.</p>
            <img src="/img/INTERACTIVE-CLOSE.png" class="btn s3_close">`
            $('.content').append(pop_up);
            $('.s3_close').click(()=>{
                $('#pop_up2').remove();
            });
            break;
        case 'pop_up_btn4':
            var pop_up = `<div id="pop_up2" class="pop_up2">
            <h6 class="pop2Title_1">Location-Based Services</h6>
            <p class="pop2Description_1">SPEAR has been developed to provide accurate and robust smartphone navigation. A specific release for Android devices leverages smartphone connectivity and complementary sensors to deliver smartphone navigation with horizontal errors under 1 meter.</p>
            <img src="/img/INTERACTIVE-CLOSE.png" class="btn s3_close">`
            $('.content').append(pop_up);
            $('.s3_close').click(()=>{
                $('#pop_up2').remove();
            });
            break;
        case 'pop_up_btn5':
            var pop_up = `<div id="pop_up2" class="pop_up2">
            <h6 class="pop2Title_1">Smart Agriculture</h6>
            <p class="pop2Description_1">Precision agriculture autonomous machinery in need of accurate and affordable navigation can rely on SPEAR embedded in their navigation on-board unit to get the best navigation possible out of the GNSS hardware in the platform.</p>
            <img src="/img/INTERACTIVE-CLOSE.png" class="btn s3_close">`
            $('.content').append(pop_up);
            $('.s3_close').click(()=>{
                $('#pop_up2').remove();
            });
            break;
        case 'pop_up_btn6':
            var pop_up = `<div id="pop_up2" class="pop_up2">
            <h6 class="pop2Title_1">Internet Of Things</h6>
            <p class="pop2Description_1">IoT device location is the cornerstone information in a myriad of applications(micromobility,asset tracking, etc.). Should accuracy and robustness of the location be a game changer in the IoT application, SPEAR can be embedded in the IoT device to provide decimetric performance.</p>
            <img src="/img/INTERACTIVE-CLOSE.png" class="btn s3_close">`
            $('.content').append(pop_up);
            $('.s3_close').click(()=>{
                $('#pop_up2').remove();
            });
            break;
    }
});

//animations
$('#r_header_logo').click(()=>{
        gsap.to('#r_header_logo',{duration:0.1,x:11,repeat:5,yoyo:true,ease:Sine.easeInOut}) 
});

var title = document.getElementById('d2_d1')

title.addEventListener('mouseover',()=>{

    title.className += ' animate__animated animate__swing'
    setTimeout(()=>{title.className -= ' animate__animated animate__swing'}, 900);
});

$('#separation').hover(()=>{
    gsap.to('#separation',{  rotateX:'60deg',transformStyle: 'preserve-3d'})
    $('#separation').mouseout(()=>{gsap.to('#separation',{  rotateX:0,transformStyle: 'preserve-3d'})})
});

const web_init = gsap.timeline({default:{ease:'powe4.inOut'}})

web_init.to('#r_header_logo',{duration:2,'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity:1}).to('#giff',{duration:1,'clip-path': 'polygon(100% 100%, 0% 100%, 0% 0%, 100% 0%)',opacity:1},'-=1.8').to('h1.title.s1',{duration:0.8,'clip-path': 'polygon(100% 100%, 0% 100%, 0% 0%, 100% 0%)', opacity:1},'-=1.5').to('h4.text.s1, .s1_underline',{duration:0.8,'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity:1},'-=1.5').from('#small_separation',{ease:Bounce.easeOut,duration:1,scaleY:0, opacity:0},'-=1.5')

// const tl_0 = gsap.timeline({
//     scrollTrigger:{
//         trigger:'.text.s1',
        
//         markers:true,
//         start:'bottom center',
//         end:'bottom center'
//     }, stagger:0.3
// });

// tl_0.to('.text.s1',{opacity:0,y:-50}).to('#giff',{opacity:0,x:50}).to('.title.s1',{opacity:0,y:50}).to('#small_separation',{opacity:0,y:-50}).to('#r_header_logo',{opacity:0,y:50})


const tl_1 = gsap.timeline({
    scrollTrigger:{
        trigger:'.title.s2',
        toggleActions:'play play none none',
        markers:false,
        start:'bottom center',
        end:'100% center'
    }, stagger:0.6
});

tl_1.from('#separation',{scaleY:0,ease:Bounce.easeOut}).from('.title.s2',{y:35,opacity:0}).from('.s2_fadedown',{opacity:0,duration:0.2,y:-50,stagger:0.2}).from('.s2_fadeup',{opacity:0,duration:.4,y:50,stagger:0.2},'-=1').from("#d2_d3",{opacity:0}).from('h6#d2_t1, h6#d2_t2, h4.text.s2, img.s2_underline',{y:35,opacity:0},'-=1').from('#d2_d7_1, #d2_d7_2',{scaleX:0,duration:1,ease:Bounce.easeOut}).from('.btn.s2',{scale:0,ease:Elastic.easeOut})


const tl_2 = gsap.timeline({
    scrollTrigger:{
        trigger:'#separation_2',
        toggleActions:'play play none none',
        markers:false,
        start:'bottom center',
        end:'bottom center'
    }, stagger:0.6
});

tl_2.from('#separation_2',{scaleY:0,ease:Bounce.easeOut}).from('.title.s3, .text.s3,img.s3_underline',{y:35,opacity:0},'-=1').from('.s3_fadedown',{duration:0.7,stagger:0.2,opacity:0,transform:'translateY(100px)'},'-=1').from('.s3_fadeup',{duration:0.7,stagger:0.1,opacity:0,transform:'translateY(-100px)'},'-=2').from('.btn.s3_1, .btn.s3_2, .btn.s3_3, .btn.s3_4, .btn.s3_5',{scale:0,ease:Elastic.easeOut}).call(animate_highlights())

function animate_highlights() {
    gsap.fromTo('#d3_d3_h3',{'clip-path':'polygon(0% 0%, 100% 0%, 100% 55%, 0% 55%)'},{'clip-path':'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',repeat:-1,ease:Bounce.easeOut,duration:2.5});
    gsap.to('#d3_d3_h4',{'clip-path':'polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)',repeat:-1,duration:2.5})
    gsap.from('#d3_d5_h5',{opacity:0,ease:Elastic.easeOut,duration:2});
    gsap.to('#d3_d5_h5_2',{'clip-path':'polygon(0% 99%, 44% 49%, 62% 7%, 100% 0%, 100% 100%, 9% 100%)',repeat:-1,ease:Bounce.easeOut,duration:2.5});

  
}

const tl_3 = gsap.timeline({
    scrollTrigger:{
        trigger:'#separation_3',
        toggleActions:'play play none none',
        markers:false,
        start:'bottom center',
        end:'bottom center'
    }, stagger:0.6
});

tl_3.from('#separation_3',{duration:0.7,scaleY:0,ease:Bounce.easeOut}).from('.title.s4, .text.s4, img.s4_underline',{y:35,opacity:0}).from('.s4_fadeup',{duration:0.7,stagger:0.2,opacity:0,transform:'translateY(100px)'},'-=0.5').from('.s4_fadedown',{duration:0.5,stagger:0.1,opacity:0,transform:'translateY(-100px)'},'-=1').to('#p1, #p2, #p3, #p4',{'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',stagger:0.4, opacity:1})



const tl_4 = gsap.timeline({
    scrollTrigger:{
        trigger:'#p4',
        toggleActions:'play play none none',
        markers:false,
        start:'bottom 70%',
        end:'bottom 70%'
    }, stagger:0.6
});

tl_4.from('#r_download',{duration:0.7,scaleY:0,ease:Bounce.easeOut}).from('.text.s5, img.clicable_text',{y:35,opacity:0}).to('#r_logo',{duration:1.4,'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', opacity:1})


$('#r_logo').click(()=>{
    gsap.to('#r_logo',{duration:0.1,x:11,repeat:5,yoyo:true,ease:Sine.easeInOut}) 
});



//DELETE


//animació amb gsap : metode 1 selecciona directament cada element
//metode 2 utilitza timeline per encadenar efectes/ "-=2 per adelantar l'efecte"

// gsap.from('.anim1',{opacity:0, duration:1, y: -50, stagger:0.6});
// gsap.from('img',{duration:1, y:30,opacity:0, delay: 0.6})



// var tl = gsap.timeline({defaults:{duration: 0.8,},repeat:-1, repeatDelay: 2})

// timeline normal

// tl.from(".anim1",{y: -50, stagger:.6, opacity: 0})
// .from('img',{duration:1, y:30,opacity:0, delay: 0.6},"-=1").from(".anim2",{y:30,opacity:0})

// tl.from("#d2_d1",{y:20, opacity: 0})
// .from("#d2_d2",{duration:1, y:30,opacity:0, delay: 0.6},"-=1")
// .from(".d2_d3_1",{opacity:0},"-=0.4")
// .from(".d2_d3_2",{opacity:0},"-=0.2")
// .from(".d2_d3_3",{opacity:0},"-=0.1")
// .from(".d2_d3_4",{opacity:0},"-=0")





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
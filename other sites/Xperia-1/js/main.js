
//========= the header ======//
var controller = new ScrollMagic.Controller();

var scene1 = new ScrollMagic.Scene({
    triggerElement:'.headerTrigger',
    triggerHook: 0.0,
    duration: '60%'
})

.setPin('.headerTrigger')
// .addIndicators()
.addTo(controller);

//========= the header phone ======//

var tlFirstSection = new TimelineMax();

tlFirstSection

.set('.phoneOneTrigger', {scale:4, transformOrigin:"50% 50%"})

.to('.reveal', 3, {autoAlpha:0})
.to('.phone-1', 3, {rotation:45, transformOrigin:'100% 0%'},'-=3')
.to('.phone-2', 3, {rotation:45, transformOrigin:'100% 100%'},'-=3')
.to('.phone-3', 3, {rotation:45, transformOrigin:'0% 0%'},'-=3')
.to('.phone-4', 3, {rotation:45, transformOrigin:'0% 100%'},'-=3')


.to('.phoneOneTrigger',3, {scale:1.2})
.from('.trigger2', 2, {autoAlpha: 0},'-=3')
.to('.trigger2', 3, {y: '-300%'},'-=3')


var controller = new ScrollMagic.Controller();

var scene1 = new ScrollMagic.Scene({
    triggerElement:'.headerTrigger',
    triggerHook: 0.0,
    duration: '50%'
})

.setTween(tlFirstSection)
// .addIndicators({
//     indent: 70,
//     colorEnd:'pink'
// })
.addTo(controller);



//========= the Xperia Section ======//


var scene1 = new ScrollMagic.Scene({
    triggerElement:'.xperiaTrigger',
    triggerHook: 0.0,
    duration: '50%'
})

.setPin('.xperiaTrigger')
// .addIndicators()
.addTo(controller);

//========= the Xperia Title ======//

var tlTextSection = new TimelineMax();

tlTextSection
.from('.article1', 1, {autoAlpha:0})


    var scene2 = new ScrollMagic.Scene({
        triggerElement:'.xperiaTrigger',
        triggerHook: 0.8,
        duration: '100%'

    })

    .setTween(tlTextSection)
    // .addIndicators({
    //     indent: 40,
    //     colorStart:'purple',
    //     colorEnd:'purple'
    // })
    .addTo(controller);


    var phoneRotSec = new TimelineMax();
    
    phoneRotSec
    .to('.back-Phone',3,{y:'20%'})
    .to('.sm-Phone',3,{y:'-20%', autoAlpha:0})
    .to('.article1',3,{display:'none'},'-=3')
    .to('.back-Phone',3,{y:'-20%',scale: '1.4%', zIndex:8},'-=3')
    .to('.front-Phone',3,{y:'-10%',transformOrigin:'110%', scale: 0.8},'-=3')
    .from('.scroll-text',3,{y:'-20%', autoAlpha:0})

    

    var scenePhoneRot = new ScrollMagic.Scene({
        triggerElement:'.xperiaTrigger',
        triggerHook: 0.0,
        duration: '60%'

    })

    .setTween(phoneRotSec)
    // .addIndicators()
    .addTo(controller);


//========= the wide section ======//

var scene1 = new ScrollMagic.Scene({
    triggerElement:'.trigger3',
    triggerHook: 0.0,
    duration: '50%'
})

.setPin('.trigger3')
// .addIndicators()
.addTo(controller);


    var wideImage = new TimelineMax();

    wideImage

    .to('.blackbar1', 3,{backgroundColor:'black'},'-=3')
    .to('.wide-image', 3,{scale:1.2})
    .to('.wide-image', 3,{scale:3})


    var widing = new ScrollMagic.Scene({
        triggerElement:'.trigger3',
        triggerHook: 0.0,
        duration: '60%'

    })

    .setTween(wideImage)

    // .addIndicators()
    .addTo(controller);


    var scene3 = new ScrollMagic.Scene({
        triggerElement:'.pull',
        triggerHook: 0.1,
        duration: '65%'

    })
    .setClassToggle('.article2', 'text-show', )
    // .addIndicators()
    .addTo(controller);


//========= the xcam section ======//
    
var xtitle = new TimelineMax();

xtitle
.set('.wide',{scale:2})
.set('.wide-image',{scale:1.8})
.set('.wide',{scaleX:2})
.set('.zoom',{y:-20, scale:0.2})


.from('.xperience1', 3,{autoAlpha:0})
.from('.wide', 3,{autoAlpha:0, },'-=1')
.to('.wide', 3,{autoAlpha:0, scaleX:3},'-=1')
.from('.zoom', 3,{autoAlpha:0},'-=2')
.to('.zoom', 3,{ scale:2},'-=1.5')


var scene2 = new ScrollMagic.Scene({
    triggerElement:'.trigger3',
    triggerHook: 0.1,
    duration: '60%'
})

.setTween(xtitle)
// .addIndicators()
.addTo(controller);


//========= the day night section ======//

var dayNight = new TimelineMax({ onStart });

dayNight
    .to('.day-night-header',2, {y:'-10%'});


var dayNightScene = new ScrollMagic.Scene({
    triggerElement:'.day-night',
    triggerHook: 0.5,
    duration: '60%'
})

.setClassToggle('.day-night-header', 'show')
.setTween(dayNight)
// .addIndicators()
.addTo(controller);


var divisor = document.getElementById("divisor"),
    handle = document.getElementById("handle"),
    slider = document.getElementById("slider");

function moveDivisor() {
  handle.style.left = slider.value+"%";
	divisor.style.width = slider.value+"%";
}

window.onload = function() {
	moveDivisor();
};


function onStart() {
    handle.style.left = 50+"%";
    divisor.style.width = 50+"%";
    slider.value = 50;
    console.log(divisor.style.width);
}

//========= the blur section ======//

var blur1 = document.querySelector(".blurring");
    blurSlider = document.querySelector(".blurSlider");

    blurSlider.oninput = function () {

        blur1.style.WebkitFilter = 'blur('+(this.value/10)/2+'px)';
        console.log((this.value/10)/2);

}

//========= the skyToSea section ======//

var controller = new ScrollMagic.Controller();

var scene1 = new ScrollMagic.Scene({
    triggerElement:'.phone-cont',
    triggerHook: 0.2,
    duration: '100%'
})

.setPin('.phone-cont')
// .addIndicators()
.addTo(controller);

//========= the shaky section ======//


var dayNightScene = new ScrollMagic.Scene({
    triggerElement:'.shaky',
    triggerHook: 0.4,
    duration: '40%'
})

.setClassToggle('.shaky_phone', 'shake-phone')
// .setTween(dayNight)
// .addIndicators()
.addTo(controller);


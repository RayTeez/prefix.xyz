//nav

$(document).ready(function(){
	$("#nav-icon",).click(function(){
        $(this).toggleClass("open");
        $(".nav-sec").toggleClass("slide-in");
	});
});


const cursor = document.querySelector(".cursor");
const test = document.querySelector(".test");
const test2 = document.querySelector("h2");



// [][][][][][][][]

var windowWidth = $(window).width();

$('.proj-title').mousemove(function(event){
  var moveX = (($(window).width() / 2) - event.pageX) * 0.1;
  var moveY = (($(window).height() / 2) - event.pageY) * 0.1;
  $('.bg-img').css('margin-left', moveX + 'px');
  $('.bg-img').css('margin-top', moveY + 'px');
  $('.title-turn').css('margin-left', -moveX + 'px');
  $('.title-turn').css('margin-top', -moveY + 'px');
});

var tlAboutSection = new TimelineMax();

tlAboutSection
.from('.title-turn',1,{autoAlpha:0, y:-30})
.from('.fade-in-first',1,{y:"100%", ease: "expo.out"}, '-=1')
.from('.fade-in-sec',2,{autoAlpha:0})
.from('.grads',3,{y:"60%"}, '-=1');

// text reveals
// var textReveal = new TimelineMax();
// var rule = CSSRulePlugin.getRule("li:after");

// textReveal
// .to(rule, {CSSRule: {y:1000}})
// // var rule = CSSRulePlugin.getRule("li:after"); //get the rule
// // textReveal
// // .to(rule, 3, {cssRule:{color:"#0000FF"}});



//[][][[][[]-------------[][][][][][]


const vision = document.querySelector(".vision");
const fpo = document.querySelector(".fpo");
const df = document.querySelector(".df");
const bb = document.querySelector(".bb");
const con = document.querySelector(".con");
const cure = document.querySelector(".cure");
const efw = document.querySelector(".efw");
const ms = document.querySelector(".ms");
const chair = document.querySelector(".chair");
const open = document.querySelector(".open");

const les = document.querySelector(".les");
const mm = document.querySelector(".mm");
const cer = document.querySelector(".cer");
const bs = document.querySelector(".bs");
const sonx = document.querySelector(".sonx");
const sli = document.querySelector(".sli");
const cd = document.querySelector(".cd");
const al = document.querySelector(".al");
const rephoria = document.querySelector(".rephoria");
const rePhoto = document.querySelector(".re-photo");

//-------


vision.addEventListener("mouseenter", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.add("cur-img1");
    console.log(e);
    

})

vision.addEventListener("mouseleave", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.remove("cur-img1");
    console.log(e);
    

})

vision.addEventListener("mousemove", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    console.log(e);
})

//---------

fpo.addEventListener("mouseenter", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.add("cur-img2");
    console.log(e);
    
})

fpo.addEventListener("mouseleave", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.remove("cur-img2");
    console.log(e);
    
})

fpo.addEventListener("mousemove", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    console.log(e);
    
})

//---------

df.addEventListener("mouseenter", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.add("cur-img3");
    console.log(e);
    
})

df.addEventListener("mouseleave", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.remove("cur-img3");
    console.log(e);
    
})

df.addEventListener("mousemove", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    console.log(e);
    
})

//---------

bb.addEventListener("mouseenter", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.add("cur-img4");
    console.log(e);
    
})

bb.addEventListener("mouseleave", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.remove("cur-img4");
    console.log(e);
    
})

bb.addEventListener("mousemove", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    console.log(e);
    
})

//---------

con.addEventListener("mouseenter", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.add("cur-img5");
    console.log(e);
    
})

con.addEventListener("mouseleave", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.remove("cur-img5");
    console.log(e);
    
})

con.addEventListener("mousemove", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    console.log(e);
    
})

//---------

cure.addEventListener("mouseenter", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.add("cur-img6");
    console.log(e);
    
})

cure.addEventListener("mouseleave", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.remove("cur-img6");
    console.log(e);
    
})

cure.addEventListener("mousemove", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    console.log(e);
    
})

//---------

efw.addEventListener("mouseenter", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.add("cur-img7");
    console.log(e);
    
})

efw.addEventListener("mouseleave", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.remove("cur-img7");
    console.log(e);
    
})

efw.addEventListener("mousemove", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    console.log(e);
    
})

//---------

ms.addEventListener("mouseenter", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.add("cur-img8");
    console.log(e);
    
})

ms.addEventListener("mouseleave", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.remove("cur-img8");
    console.log(e);
    
})

ms.addEventListener("mousemove", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    console.log(e);
    
})

//---------

chair.addEventListener("mouseenter", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.add("cur-img9");
    console.log(e);
    
})

chair.addEventListener("mouseleave", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.remove("cur-img9");
    console.log(e);
    
})

chair.addEventListener("mousemove", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    console.log(e);
    
})

//---------

les.addEventListener("mouseenter", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.add("cur-img");
    console.log(e);
    
})

les.addEventListener("mouseleave", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.remove("cur-img");
    console.log(e);
    
})

les.addEventListener("mousemove", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    console.log(e);
    
})

//---------

open.addEventListener("mouseenter", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.add("cur-img10");
    console.log(e);
    
})

open.addEventListener("mouseleave", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.remove("cur-img10");
    console.log(e);
    
})

open.addEventListener("mousemove", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    console.log(e);
    
})

//---------



//---------

bs.addEventListener("mouseenter", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.add("cur-img14");
    console.log(e);
    
})

bs.addEventListener("mouseleave", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.remove("cur-img14");
    console.log(e);
    
})

bs.addEventListener("mousemove", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    console.log(e);
    
})

//---------

sonx.addEventListener("mouseenter", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.add("cur-img12");
    console.log(e);
    
})

sonx.addEventListener("mouseleave", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.remove("cur-img12");
    console.log(e);
    
})

sonx.addEventListener("mousemove", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    console.log(e);
    
})

//---------

sli.addEventListener("mouseenter", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.add("cur-img11");
    console.log(e);
    
})

sli.addEventListener("mouseleave", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.remove("cur-img11");
    console.log(e);
    
})

sli.addEventListener("mousemove", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    console.log(e);
    
})

//---------

cer.addEventListener("mouseenter", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.add("cur-img13");
    console.log(e);
    
})

cer.addEventListener("mouseleave", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.remove("cur-img13");
    console.log(e);
    
})

cer.addEventListener("mousemove", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    console.log(e);
    
})

//---------

cd.addEventListener("mouseenter", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.add("cur-img7");
    console.log(e);
    
})

cd.addEventListener("mouseleave", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.remove("cur-img7");
    console.log(e);
    
})

cd.addEventListener("mousemove", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    console.log(e);
    
})

//---------

al.addEventListener("mouseenter", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.add("cur-img7");
    console.log(e);
    
})

al.addEventListener("mouseleave", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.remove("cur-img7");
    console.log(e);
    
})

al.addEventListener("mousemove", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    console.log(e);
    
})

//---------

rephoria.addEventListener("mouseenter", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.add("cur-img7");
    console.log(e);
    
})

rephoria.addEventListener("mouseleave", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.remove("cur-img7");
    console.log(e);
    
})

rephoria.addEventListener("mousemove", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    console.log(e);
    
})

//---------

rePhoto.addEventListener("mouseenter", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.add("cur-img7");
    console.log(e);
    
})

rePhoto.addEventListener("mouseleave", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    cursor.classList.remove("cur-img7");
    console.log(e);
    
})

rePhoto.addEventListener("mousemove", e =>{
    cursor.setAttribute("style", "top:"+ (e.pageY-200) + "px; left:" +(e.pageX-100)+"px;");
    console.log(e);
    
})




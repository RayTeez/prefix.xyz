var phoneRot = new TimelineMax();
var controller = new ScrollMagic.Controller();


phoneRot


.to('.reveal', 3, {autoAlpha:0})
.to('.phone1', 3, {rotation:45, transformOrigin:'100% 0%'},'-=3')
.to('.phone2', 3, {rotation:45, transformOrigin:'100% 100%'},'-=3')
.to('.phone3', 3, {rotation:45, transformOrigin:'0% 0%'},'-=3')
.to('.phone4', 3, {rotation:45, transformOrigin:'0% 100%'},'-=3')

var scPhoneRot = new ScrollMagic.Scene({
    triggerElement:'.x-phone-cont',
    triggerHook: 0.0,
    duration: '40%'

})

.setTween(phoneRot)
.setPin('.x-phone-cont')
.addIndicators()
.addTo(controller);


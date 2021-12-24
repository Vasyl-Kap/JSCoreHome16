let r,g,b,h,w,l,t;
$(function() {
    setInterval(function() {
        r = Math.round(Math.random()*255);
        g = Math.round(Math.random()*255);
        b = Math.round(Math.random()*255);
        h = Math.round(Math.random()*200);
        w = Math.round(Math.random()*200);
        l = Math.round(Math.random()*1460);
        t = Math.round(Math.random()*630);
        $('.disco-ball').animate({
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
            borderColor: `rgb(${g}, ${b}, ${r})`,
            width: `${w}px`,
            height: `${h}px`,
            left: `${l}px`,
            top: `${t}px`            
        },1000, 'easeOutQuart') 
    },1000)
})
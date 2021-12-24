let r,g,b,h,w,l,t;
$('.round-box').on('click', function(){
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);
    h = Math.round(Math.random()*300);
    w = Math.round(Math.random()*300);
    l = Math.round(Math.random()*1460);
    t = Math.round(Math.random()*630);
    $(this).animate({
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        width: `${w}px`,
        height: `${h}px`,
        left: `${l}px`,
        top: `${t}px`
    },2000, 'easeInOutBack')
})
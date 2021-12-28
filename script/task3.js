$('.box').each(function(index, element) {
    let y = $('.box').eq(index).offset().left;
    $(element).click(function(){
        $('.box').eq(index).attr('hidden', true);
        $('.hidden').eq(index).removeAttr('hidden');
        $('.modal-container').css({
            backgroundColor: 'rgb(0 0 0 / 70%)',
            zIndex: 3
        });
        $('.hidden').eq(index).css('z-index', 99).animate({
            top: ((window.innerHeight - 400)/2)-60,
            left: (window.innerWidth - 400)/2 - y,
            width: `400px`,
            height: `400px`,
        },1000, 'easeOutBack').click(function() {
            $(this).animate({
                top: 0,
                left: 0,
                width: `150px`,
                height: `150px`,
            },1000, 'easeInBack', function() {
                $('.modal-container').css({
                    backgroundColor: '#fff',
                    zIndex: -1
                });
                $('.hidden').eq(index).attr('hidden', true);
                $('.box').eq(index).removeAttr('hidden');
            })
        })
    })
})
$('.box').each(function(index, element) {
    $(element).click(function(){
        $('.modal-container').css({
            backgroundColor: 'rgb(0 0 0 / 70%)',
            zIndex: 3
        });
        $('.box').eq(index).toggle(function() {
            $(this).css('z-index', 99);
            $(this).css('transform', `translate(-50%, 0)`);
            $(this).animate({
                top: `50%`,
                left: `50%`,
                marginRight: `-50%`,
                width: `400px`,
                height: `400px`,
            },1000)
        })
        // $('.box').eq(index).css('z-index', 99);
        // $('.box').eq(index).css('transform', `translate(-50%, 0)`);
        // $('.box').eq(index).animate({
        //     top: `50%`,
        //     left: `50%`,
        //     marginRight: `-50%`,
        //     width: `400px`,
        //     height: `400px`,
        // },1000).click(function(){
        //     $('.modal-container').css({
        //         backgroundColor: '#fff',
        //         zIndex: -1
        //     });
        //     $(this).animate({
        //         top: ``,
        //         left: ``,
        //         marginRight: ``,
        //         width: `150px`,
        //         height: `150px`,
        //     })
        // });

    })
})
$(function(){
    $(".none-rogo").on("click",function(){
        $(".hide-menu").show();
        console.log(zzz);
    });
    
    $(".close").on("click",function(){
        $(".hide-menu").hide();
    });

    $(window).on('scroll', function() {
        var scrollPosition = $(window).scrollTop();
        
        if (scrollPosition > 50) { // 스크롤이 50px 이상 내려갔을 때
            $('header').addClass('scrolled');
        } else { // 스크롤이 50px 이하일 때
            $('header').removeClass('scrolled');
        }
    });
    
});
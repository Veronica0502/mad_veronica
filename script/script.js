$(function(){

    // 메뉴

    $(".main > li").hover(function(){
        $(".sub").stop().slideDown();
    }, function(){
        $(".sub").stop().slideUp();
    })



    // 슬라이드 영역

    var n=0 ; //0 1 2

    setInterval(function(){
        if(n == 2){
            n=0;
        } else{
            n++;
        }//if
        console.log(n);

        pos= n * (-300) + "px";

        console.log(pos);

        $(".move").animate({top:pos }, 500);

    }, 2500);

    /* 탭메뉴(notice/gallery) */
    $(".notice_gal h2").click(function(){
        $(".notice_gal h2").removeClass("on")
        $(this).addClass("on")

        $(".notice_gal ul").hide()
        $(this).next().show()
    })/* .notice_gal h2 click */

    /* popup */
    $(".click").click(function(){
        $(".popup").show()
    })

    $(".popup button").click(function(){
        $(".popup").hide()
    })

})//jquery
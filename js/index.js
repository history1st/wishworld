// --------비쥬얼
$(function(){
    let total = $(".panel li").length;
    console.log(total);
    let i = 0;

    // 다음 슬라이드 함수
    function next(){
        if(i == total - 1){
            i = 0;
            $(".panel").stop().animate({"margin-left": 0}); // 1번째로 돌아갈 때 애니메이션 적용
        }else{
            i++
            $(".panel").stop().animate({"margin-left": -i * 100 + "%"}); // 넘어가는 장면 보여줌
        }
        $(".navi li").removeClass("on");
        $(".navi li").eq(i).addClass("on");
    }

    // 무한 반복 함수
    function start(){
        timer = setInterval(function(){
            next();
        }, 4000);
    }

    // 반복 함수 호출
    start();

    // 다음버튼
    $(".next").on("click", function(){
        clearInterval(timer); // timer를 clearInterval(timer)로 수정
        next();
    });

    // 이전 버튼
    $(".prev").on("click", function(){
        clearInterval(timer); // timer를 clearInterval(timer)로 수정
        if(i == 0){
            i = total - 1;
            $(".panel").stop().animate({"margin-left": -(total - 1) * 100 + "%"}); // 애니메이션 적용
        }else{
            --i
            $(".panel").stop().animate({"margin-left": -i * 100 + "%"}); // 넘어가는 장면 보여줌
        }
        $(".navi li").removeClass("on");
        $(".navi li").eq(i).addClass("on");
    });

    // 네비바 버튼
    $(".navi li").on("click", function () {
        clearInterval(timer); // timer를 clearInterval(timer)로 수정
        i = $(this).index();
        $(".panel").stop().animate({"margin-left": -i * 100 + "%"}); // 애니메이션 적용
        $(".navi li").removeClass("on");
        $(".navi li").eq(i).addClass("on");
    });
});

// ----- 콘1번

$(document).ready(function() {
    let currentIndex = 0; // 현재 이미지 인덱스 (0부터 시작)
    const totalImages = $(".img-slide li").length; // 이미지 갯수

    // 초기 설정: 첫 번째 이미지와 숫자
    updateSlide();

    // 왼쪽 화살표 클릭 시
    $(".left").click(function(e) {
        e.preventDefault();
        currentIndex--; // 인덱스를 하나 감소
        if (currentIndex < 0) {
            currentIndex = totalImages - 1; // 첫 번째 이미지로 돌아감
        }
        updateSlide();
    });

    // 오른쪽 화살표 클릭 시
    $(".right").click(function(e) {
        e.preventDefault();
        currentIndex++; // 인덱스를 하나 증가
        if (currentIndex >= totalImages) {
            currentIndex = 0; // 마지막 이미지에서 첫 번째 이미지로 돌아감
        }
        updateSlide();
    });

    // 이미지와 텍스트를 업데이트하는 함수
    function updateSlide() {
        // 이미지 전환: 모든 li에서 'now' 클래스를 제거하고, 현재 인덱스에 해당하는 이미지에만 'now' 클래스를 추가
        $(".img-slide li").removeClass("now").eq(currentIndex).addClass("now");

        // 숫자 전환: currentIndex가 0부터 시작하므로 (currentIndex + 1)으로 표시
        $(".current-number").text((currentIndex + 1) + "/" + totalImages);
    }
});

// -----콘 2번 



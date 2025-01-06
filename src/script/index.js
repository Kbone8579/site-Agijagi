window.addEventListener('DOMContentLoaded', function(){
    // 한 페이지씩 이동
    const elm = document.querySelectorAll('.fage');
    const elmCount = elm.length;
    elm.forEach(function(item, index){
      item.addEventListener('mousewheel', function(event){
        event.preventDefault();
        let delta = 0;

        if (!event) event = window.event;
        if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
            if (window.opera) delta = -delta;
        } 
        else if (event.detail)
            delta = -event.detail / 3;

        let moveTop = window.scrollY;
        let elmSelector = elm[index];

        // wheel down : move to next section
        if (delta < 0){
          if (elmSelector !== elmCount-1){
            try{
              moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;
            }catch(e){}
          }
        }
        // wheel up : move to previous section
        else{
          if (elmSelector !== 0){
            try{
              moveTop = window.pageYOffset + elmSelector.previousElementSibling.getBoundingClientRect().top;
            }catch(e){}
          }
        }

        const body = document.querySelector('html');
        window.scrollTo({top:moveTop, left:0, behavior:'smooth'});
      });
    });

    // 클릭시 해당 페이지로 이동
    // 페이지1
    document.querySelector(".number-btn.s1 .btn2").addEventListener("click", (e) => {
      document.querySelector(".fage.s2").scrollIntoView({ behavior: "smooth"});
    });
    document.querySelector(".number-btn.s1 .btn3").addEventListener("click", (e) => {
      document.querySelector(".fage.s3").scrollIntoView({ behavior: "smooth"});
    });
    // 페이지2
    document.querySelector(".number-btn.s2 .btn1").addEventListener("click", (e) => {
      document.querySelector(".fage.s1").scrollIntoView({ behavior: "smooth"});
    });
    document.querySelector(".number-btn.s2 .btn3").addEventListener("click", (e) => {
      document.querySelector(".fage.s3").scrollIntoView({ behavior: "smooth"});
    });
    // 페이지3
    document.querySelector(".number-btn.s3 .btn1").addEventListener("click", (e) => {
      document.querySelector(".fage.s1").scrollIntoView({ behavior: "smooth"});
    });
    document.querySelector(".number-btn.s3 .btn2").addEventListener("click", (e) => {
      document.querySelector(".fage.s2").scrollIntoView({ behavior: "smooth"});
    });
    // 클릭시 해당 페이지로 이동
    // 페이지5
    document.querySelector(".number-btn.s4 .btn2").addEventListener("click", (e) => {
      document.querySelector(".fage.s6").scrollIntoView({ behavior: "smooth"});
    });
    document.querySelector(".number-btn.s4 .btn3").addEventListener("click", (e) => {
      document.querySelector(".fage.s7").scrollIntoView({ behavior: "smooth"});
    });
    // 페이지6
    document.querySelector(".number-btn.s5 .btn1").addEventListener("click", (e) => {
      document.querySelector(".fage.s5").scrollIntoView({ behavior: "smooth"});
    });
    document.querySelector(".number-btn.s5 .btn3").addEventListener("click", (e) => {
      document.querySelector(".fage.s7").scrollIntoView({ behavior: "smooth"});
    });
    // 페이지7
    document.querySelector(".number-btn.s6 .btn1").addEventListener("click", (e) => {
      document.querySelector(".fage.s5").scrollIntoView({ behavior: "smooth"});
    });
    document.querySelector(".number-btn.s6 .btn2").addEventListener("click", (e) => {
      document.querySelector(".fage.s6").scrollIntoView({ behavior: "smooth"});
    });
});



// about 페이지
$(document).ready(function(){
  // 모든 이미지를 숨기고 검정 필터 적용하는 함수
  function hideAllImages() {
    $(".fage.a6 .img img").hide().css({
      'filter': 'brightness(0)',
      'transition': 'filter 2s ease'
    });
  }
  
  // 초기 설정
  hideAllImages();
  
  $(".fage.a6 .section.s1 .circle").hover(
    function(){
      hideAllImages();
      const img = $(".fage.a6 .img.s1 img");
      img.show();
      // 약간의 지연 후 밝기 변경 (애니메이션이 보이도록)
      setTimeout(function() {
        img.css('filter', 'brightness(1)');
      }, 10);
    }
  );
  
  $(".fage.a6 .section.s2 .circle").hover(
    function(){
      hideAllImages();
      const img = $(".fage.a6 .img.s2 img");
      img.show();
      setTimeout(function() {
        img.css('filter', 'brightness(1)');
      }, 10);
    }
  );
  
  $(".fage.a6 .section.s3 .circle").hover(
    function(){
      hideAllImages();
      const img = $(".fage.a6 .img.s3 img");
      img.show();
      setTimeout(function() {
        img.css('filter', 'brightness(1)');
      }, 10);
    }
  );
});

// product kategorie btn 
$(document).ready(function(){
  $(".kategorie .main-items.s1").click(function(){
    $(".kategorie .sub-items.s1").toggle();
  });
  $(".kategorie .main-items.s2").click(function(){
    $(".kategorie .sub-items.s2").toggle();
  });
});

//dropbtn
$(document).ready(function(){
  $(".dropbtn").click(function(){
    $(".dropdown-content").toggle();
  });
});
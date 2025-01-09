window.addEventListener("DOMContentLoaded", function () {
  // 한 페이지씩 이동
  const elm = document.querySelectorAll(".fage");
  const elmCount = elm.length;
  elm.forEach(function (item, index) {
    item.addEventListener("mousewheel", function (event) {
      event.preventDefault();
      let delta = 0;

      if (!event) event = window.event;
      if (event.wheelDelta) {
        delta = event.wheelDelta / 120;
        if (window.opera) delta = -delta;
      } else if (event.detail) delta = -event.detail / 3;

      let moveTop = window.scrollY;
      let elmSelector = elm[index];

      // wheel down : move to next section
      if (delta < 0) {
        if (elmSelector !== elmCount - 1) {
          try {
            moveTop =
              window.pageYOffset +
              elmSelector.nextElementSibling.getBoundingClientRect().top;
          } catch (e) {}
        }
      }
      // wheel up : move to previous section
      else {
        if (elmSelector !== 0) {
          try {
            moveTop =
              window.pageYOffset +
              elmSelector.previousElementSibling.getBoundingClientRect().top;
          } catch (e) {}
        }
      }

      const body = document.querySelector("html");
      window.scrollTo({ top: moveTop, left: 0, behavior: "smooth" });
    });
  });

  // slider
  
  // 클릭시 해당 페이지로 이동
  // 페이지1
  document
    .querySelector(".number-btn.s1 .btn2")
    .addEventListener("click", (e) => {
      document.querySelector(".fage.s2").scrollIntoView({ behavior: "smooth" });
    });
  document
    .querySelector(".number-btn.s1 .btn3")
    .addEventListener("click", (e) => {
      document.querySelector(".fage.s3").scrollIntoView({ behavior: "smooth" });
    });
  // 페이지2
  document
    .querySelector(".number-btn.s2 .btn1")
    .addEventListener("click", (e) => {
      document.querySelector(".fage.s1").scrollIntoView({ behavior: "smooth" });
    });
  document
    .querySelector(".number-btn.s2 .btn3")
    .addEventListener("click", (e) => {
      document.querySelector(".fage.s3").scrollIntoView({ behavior: "smooth" });
    });
  // 페이지3
  document
    .querySelector(".number-btn.s3 .btn1")
    .addEventListener("click", (e) => {
      document.querySelector(".fage.s1").scrollIntoView({ behavior: "smooth" });
    });
  document
    .querySelector(".number-btn.s3 .btn2")
    .addEventListener("click", (e) => {
      document.querySelector(".fage.s2").scrollIntoView({ behavior: "smooth" });
    });
  // 클릭시 해당 페이지로 이동
  // 페이지5
  document
    .querySelector(".number-btn.s4 .btn2")
    .addEventListener("click", (e) => {
      document.querySelector(".fage.s6").scrollIntoView({ behavior: "smooth" });
    });
  document
    .querySelector(".number-btn.s4 .btn3")
    .addEventListener("click", (e) => {
      document.querySelector(".fage.s7").scrollIntoView({ behavior: "smooth" });
    });
  // 페이지6
  document
    .querySelector(".number-btn.s5 .btn1")
    .addEventListener("click", (e) => {
      document.querySelector(".fage.s5").scrollIntoView({ behavior: "smooth" });
    });
  document
    .querySelector(".number-btn.s5 .btn3")
    .addEventListener("click", (e) => {
      document.querySelector(".fage.s7").scrollIntoView({ behavior: "smooth" });
    });
  // 페이지7
  document
    .querySelector(".number-btn.s6 .btn1")
    .addEventListener("click", (e) => {
      document.querySelector(".fage.s5").scrollIntoView({ behavior: "smooth" });
    });
  document
    .querySelector(".number-btn.s6 .btn2")
    .addEventListener("click", (e) => {
      document.querySelector(".fage.s6").scrollIntoView({ behavior: "smooth" });
    });
});

// about 페이지
$(document).ready(function () {
  // 모든 이미지를 숨기고 검정 필터 적용하는 함수
  function hideAllImages() {
    $(".fage.a6 .img img").hide().css({
      filter: "brightness(0)",
      transition: "filter 2s ease",
    });
  }

  // 초기 설정
  hideAllImages();

  $(".fage.a6 .section.s1 .circle").hover(function () {
    hideAllImages();
    const img = $(".fage.a6 .img.s1 img");
    img.show();
    // 약간의 지연 후 밝기 변경 (애니메이션이 보이도록)
    setTimeout(function () {
      img.css("filter", "brightness(1)");
    }, 10);
  });

  $(".fage.a6 .section.s2 .circle").hover(function () {
    hideAllImages();
    const img = $(".fage.a6 .img.s2 img");
    img.show();
    setTimeout(function () {
      img.css("filter", "brightness(1)");
    }, 10);
  });

  $(".fage.a6 .section.s3 .circle").hover(function () {
    hideAllImages();
    const img = $(".fage.a6 .img.s3 img");
    img.show();
    setTimeout(function () {
      img.css("filter", "brightness(1)");
    }, 10);
  });
});

// product kategorie btn
$(document).ready(function () {
  $(".kategorie .main-items.s1").click(function () {
    $(".kategorie .sub-items.s1").toggle();
  });
  $(".kategorie .main-items.s2").click(function () {
    $(".kategorie .sub-items.s2").toggle();
  });
  // 모바일 사이드바의 메뉴 아이템이 클릭되면 해야할 일
  $(".kategorie ul ul > li, .content-box .title-box .dropdown").click(function () {
    // 클릭된 li 요소
    const $this = $(this);

    // 클릭된 요소의 형제의 후손중에서 활성화된 li 요소들 비활성화
    $this.siblings(".active").find(".active").removeClass("active");
    // 클릭된 요소의 형제를 비활성화
    $this.siblings(".active").removeClass("active");

    // 현재(클릭된) li가 활성화 되었다면
    if ($this.hasClass("active")) {
      // 현재 li의 후손들 중 활성화된 요소를 비활성화
      $this.find(".active").removeClass("active");
      // 현재 li를 비활성화
      $this.removeClass("active");
    } else {
      // 현재 li를 활성화
      $this.addClass("active");
    }
  });

  // 서브 메뉴가 클릭되어도 해당 서브메뉴가 닫히지 않도록 설정
  $(".kategorie ul ul").click(function () {
    return false;
  });
});

//dropbtn
$(document).ready(function () {
  $(".dropbtn").click(function () {
    $(".dropdown-content").toggle();
  });
});

// kategorie page
$(document).ready(function () {
  $(".page-btn > .page.b1").addClass("on");

  $(".page-btn > .page").click(function () {
    // active 클래스 전환 로직
    $(".page-btn > .page").removeClass("on");
    $(this).addClass("on");
    // 페이지 전환 로직
    const pageNum = $(this).hasClass("b1") ? "1" : "2";
    $(".items.s1, .items.s2").hide();
    $(`.items.s${pageNum}`).show();
    
  });
});

// kategorie items
$(document).ready(function () {
  // 공통 클릭 핸들러
  function showItems(targetClass) {
    $(".items").hide(); // 모든 items 숨기기
    $(`.items.${targetClass}`).show(); // 해당 클래스만 표시
  }

  // 주요 버튼 이벤트 설정
  $(".all-items").click(function () {
    $(this).addClass("active");
    showItems("s1");
  });

  $(".main-items.s1").click(function () {
    $(this).addClass("active");
    showItems("s3");
  });

  $(".main-items.s2").click(function () {
    
    showItems("s7");
  });

  // 하위 버튼 이벤트 설정
  $(".sub-items.s1 > .l1").click(function () {
    showItems("s4");
  });

  $(".sub-items.s1 > .l2").click(function () {
    showItems("s5");
  });

  $(".sub-items.s1 > .l3").click(function () {
    showItems("s6");
  });

  $(".sub-items.s2 > .l1").click(function () {
    showItems("s8");
  });
});


// 스와이퍼
// $(document).ready(function(){
//   const progressCircle = document.querySelector(".autoplay-progress svg");
//   const progressContent = document.querySelector(".autoplay-progress span");
//   var swiper = new Swiper(".swiper-box-1 .swiper", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     direction: "vertical",
//     effect:'fade',
//     autoplay: {
//       delay: 5000,
//       disableOnInteraction: false
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       bulletActiveClass: 'on',
//       clickable: true
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev"
//     },
//     on: {
//       autoplayTimeLeft(s, time, progress) {
//         progressCircle.style.setProperty("--progress", 1 - progress);
//         // progressContent.textContent = `${Math.ceil(time / 1000)}s`;
//       }
//     }
//   });
// });

$(document).ready(function(){
  const progressCircle = document.querySelector(".autoplay-progress svg");
  const playButton = document.querySelector(".play");
  let isPlaying = true;
  let currentProgress = 0;
  const SLIDE_DELAY = 5000;
  
  var swiper = new Swiper(".swiper-box-1 .swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    direction: "vertical",
    effect: 'fade',
    autoplay: {
      delay: SLIDE_DELAY,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      bulletActiveClass: 'on',
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        // SVG 원형 진행상태 업데이트
        currentProgress = 1 - progress;
        progressCircle.style.setProperty("--progress", currentProgress);
      },
      slideChange() {
        // 새로운 슬라이드마다 SVG 원형 초기화
        currentProgress = 0;
        progressCircle.style.setProperty("--progress", 0);
        // 새로운 슬라이드는 항상 5000ms로 시작
        swiper.params.autoplay.delay = SLIDE_DELAY;
      }
    }
  });

  playButton.addEventListener('click', function() {
    if (isPlaying) {
      // 일시정지
      swiper.autoplay.stop();
      swiper.params.autoplay.disableOnInteraction = true;
      
      // 현재 진행 상태 유지
      progressCircle.style.setProperty("--progress", currentProgress);
      
      // 버튼 상태 변경
      playButton.querySelector('img').style.opacity = '0.5';
      playButton.classList.add('paused');
    } else {
      // 재생 시작
      swiper.params.autoplay.disableOnInteraction = false;
      
      // 남은 시간 계산하여 현재 슬라이드의 딜레이 설정
      const remainingTime = SLIDE_DELAY * (1 - currentProgress);
      swiper.params.autoplay.delay = remainingTime;
      
      swiper.autoplay.start();
      
      // 버튼 상태 복구
      playButton.querySelector('img').style.opacity = '1';
      playButton.classList.remove('paused');
    }
    
    isPlaying = !isPlaying;
  });
});
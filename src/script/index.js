window.addEventListener("DOMContentLoaded", function () {
  // 한 페이지씩 이동
  const elm = document.querySelectorAll(".fage");
  const elmCount = elm.length;
  
  // 각 요소에 휠 이벤트 리스너 추가
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
            // 다음 요소 찾기
            let nextElement = elmSelector.nextElementSibling;
            // display: none인 요소를 건너뛰고 다음 보이는 요소 찾기
            while (nextElement && window.getComputedStyle(nextElement).display === 'none') {
              nextElement = nextElement.nextElementSibling;
            }
            if (nextElement) {
              moveTop = window.pageYOffset + nextElement.getBoundingClientRect().top;
            }
          } catch (e) {}
        }
      }
      // wheel up : move to previous section
      else {
        if (elmSelector !== 0) {
          try {
            // 이전 요소 찾기
            let prevElement = elmSelector.previousElementSibling;
            // display: none인 요소를 건너뛰고 이전 보이는 요소 찾기
            while (prevElement && window.getComputedStyle(prevElement).display === 'none') {
              prevElement = prevElement.previousElementSibling;
            }
            if (prevElement) {
              moveTop = window.pageYOffset + prevElement.getBoundingClientRect().top;
            }
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

// about .fage.a6 페이지
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

  $(".fage.a6 .section.s1 .circle").mouseover(function () {
    hideAllImages();
    const img = $(".fage.a6 .img.s1 img");
    img.show();
    // 약간의 지연 후 밝기 변경 (애니메이션이 보이도록)
    setTimeout(function () {
      img.css("filter", "brightness(1)");
    }, 10);
  });
  $(".fage.a6 .section.s1 .circle").mouseout(function () {
    hideAllImages();
    const img = $(".fage.a6 .img.s1 img");
    img.hide();
  });

  $(".fage.a6 .section.s2 .circle").mouseover(function () {
    hideAllImages();
    const img = $(".fage.a6 .img.s2 img");
    img.show();
    setTimeout(function () {
      img.css("filter", "brightness(1)");
    }, 10);
  });
  $(".fage.a6 .section.s2 .circle").mouseout(function () {
    hideAllImages();
    const img = $(".fage.a6 .img.s2 img");
    img.hide();
  });

  $(".fage.a6 .section.s3 .circle").mouseover(function () {
    hideAllImages();
    const img = $(".fage.a6 .img.s3 img");
    img.show();
    setTimeout(function () {
      img.css("filter", "brightness(1)");
    }, 10);
  });
  $(".fage.a6 .section.s3 .circle").mouseout(function () {
    hideAllImages();
    const img = $(".fage.a6 .img.s3 img");
    img.hide();
  });
});


// product 카테로기 버튼
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
  $(".dropbtn").click(function (e) {
    e.stopPropagation(); // 이벤트 버블링 방지
    $(".dropdown").addClass("active");
    $(".dropdown-content").toggle();
  });

  $(document).click(function () {
    $(".dropdown-content").hide(); // 문서의 다른 곳을 클릭하면 숨김
    $(".dropdown").removeClass("active");
  });

  $(".dropdown-content").click(function (e) {
    e.stopPropagation(); // 드롭다운 내부를 클릭해도 닫히지 않도록 방지
  });
});

// kategorie page
$(document).ready(function () {

  $(".page-btn > .page").click(function () {
    // active 클래스 전환 로직
    $(".page-btn .page").removeClass("on");
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



// slider 스와이퍼
// 디폴트 스와이퍼
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
// 적용 스와이퍼
$(document).ready(function(){
  const progressCircle = document.querySelector(".autoplay-progress svg");
  const playButton = document.querySelector(".play");
  let isPlaying = true;
  let currentProgress = 0;
  const SLIDE_DELAY = 6000;
  
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
$(document).ready(function(){
var swiper = new Swiper(".swiper3 .swiper", {
  slidesPerView: 1.3,
  spaceBetween: 20,
  // loop: true,
  pagination: {
    // el: ".swiper3 .swiper-pagination",
    clickable: true
  }
});
});


// .fage.s4 비디오 플레이어 초기화 및 설정
document.addEventListener('DOMContentLoaded', function() {
  // 비디오와 컨테이너 요소들을 가져옴
  const videos = [
      document.getElementById('video-1'),
      document.getElementById('video-2'),
      document.getElementById('video-3'),
      document.getElementById('video-4')
  ];
  
  const containers = [
      document.getElementById('video1'),
      document.getElementById('video2'),
      document.getElementById('video3'),
      document.getElementById('video4')
  ];
  
  let currentVideoIndex = 0;
  let isPlaying = false;

  // 다음 비디오 재생 함수
  function playNextVideo() {
      if (!isPlaying) return;
      
      // 현재 비디오 숨기기
      containers[currentVideoIndex].classList.remove('active');
      
      // 다음 비디오 인덱스로 이동
      currentVideoIndex = (currentVideoIndex + 1) % videos.length;
      
      // 다음 비디오 보이기 및 재생
      containers[currentVideoIndex].classList.add('active');
      videos[currentVideoIndex].currentTime = 0;
      videos[currentVideoIndex].play();
  }

  // 비디오 시퀀스 시작 함수
  function startVideoSequence() {
      if (isPlaying) return;
      
      isPlaying = true;
      
      // 모든 비디오 초기화
      videos.forEach((video, index) => {
          video.currentTime = 0;
          containers[index].classList.remove('active');
      });
      
      // 첫 번째 비디오부터 시작
      currentVideoIndex = 0;
      containers[0].classList.add('active');
      videos[0].play();
  }

  // 비디오 시퀀스 정지 함수
  function stopVideoSequence() {
      isPlaying = false;
      videos.forEach(video => {
          video.pause();
          video.currentTime = 0;
      });
  }

  // Intersection Observer 설정
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          // 섹션이 화면에 들어오면 비디오 시작
          if (entry.isIntersecting) {
              console.log('Section is visible - starting video');
              startVideoSequence();
          } else {
              // 섹션이 화면에서 벗어나면 비디오 정지
              console.log('Section is hidden - stopping video');
              stopVideoSequence();
          }
      });
  }, {
      threshold: 0.3  // 30% 이상 보일 때 실행
  });

  // 섹션 관찰 시작
  const section = document.querySelector('.fage.s4');
  if (section) {
      observer.observe(section);
      console.log('Observing section');
  } else {
      console.log('Section not found');
  }

  // 각 비디오에 종료 이벤트 리스너 추가
  videos.forEach(video => {
      if (video) {
          video.addEventListener('ended', () => {
              console.log('Video ended - playing next');
              playNextVideo();
          });
      }
  });

  // 초기 상태 설정
  console.log('Initializing video sequence');
  stopVideoSequence();
});



// fage.s4 해당 비디오 클릭시 해당 비디오 재생
document.addEventListener('DOMContentLoaded', function() {
  // Get all video containers and video elements
  const videoContainers = document.querySelectorAll('.video-container');
  const videos = document.querySelectorAll('.video-container video');
  
  // Get both sets of thumbnails
  const mainThumbnails = document.querySelectorAll('.side-sub .img-box ul li a');
  const smallThumbnails = document.querySelectorAll('.side-sub-small .img-box ul li a');

  // Current video index tracker
  let currentVideoIndex = 0;

  // Hide all videos except the first one initially
  videoContainers.forEach((container, index) => {
      if (index !== 0) {
          container.classList.remove('active');
      }
  });

  // Function to play next video
  function playNextVideo() {
      // Hide current video
      videoContainers[currentVideoIndex].classList.remove('active');
      
      // Update index for next video
      currentVideoIndex = (currentVideoIndex + 1) % videos.length;
      
      // Show and play next video
      videoContainers[currentVideoIndex].classList.add('active');
      videos[currentVideoIndex].currentTime = 0;
      videos[currentVideoIndex].play();
  }

  // Function to switch to specific video
  function switchToVideo(index) {
      // Stop and hide current video
      videos[currentVideoIndex].pause();
      videoContainers[currentVideoIndex].classList.remove('active');
      
      // Update current index
      currentVideoIndex = index;
      
      // Show and play new video
      videoContainers[currentVideoIndex].classList.add('active');
      videos[currentVideoIndex].currentTime = 0;
      videos[currentVideoIndex].play();
  }

  // Add click event listeners to main thumbnails
  mainThumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', (e) => {
          e.preventDefault();
          switchToVideo(index);
      });
  });

  // Add click event listeners to small thumbnails
  smallThumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', (e) => {
          e.preventDefault();
          switchToVideo(index);
      });
  });

  // Add ended event listeners to all videos for infinite loop
  videos.forEach(video => {
      video.addEventListener('ended', playNextVideo);
  });

  // Start playing the first video
  videos[0].play();
});


// side-sub 확대 축소
document.addEventListener('DOMContentLoaded', function() {
  const sideSubMain = document.querySelector('.side-sub');
  const sideSubSmall = document.querySelector('.side-sub-small');
  const backBtn = document.querySelector('.side-sub .back-btn');
  const menuBtn = document.querySelector('.side-sub-small .menu-btn');

  // Function to handle transition end
  function handleTransitionEnd(element) {
      if (element.classList.contains('slide-out-right') || 
          element.classList.contains('slide-out-left')) {
          element.classList.add('hidden');
          element.classList.remove('slide-out-right', 'slide-out-left');
      }
  }

  // Add transition end listeners
  sideSubMain.addEventListener('animationend', () => handleTransitionEnd(sideSubMain));
  sideSubSmall.addEventListener('animationend', () => handleTransitionEnd(sideSubSmall));

  // Back button click handler
  backBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Animate main sidebar out
      sideSubMain.classList.add('slide-out-right');
      
      // Show and animate small sidebar in
      sideSubSmall.classList.remove('hidden');
      sideSubSmall.classList.add('slide-in-right');
      
      // Remove animation classes after completion
      setTimeout(() => {
          sideSubSmall.classList.remove('slide-in-right');
      }, 500);
  });

  // Menu button click handler
  menuBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Animate small sidebar out
      sideSubSmall.classList.add('slide-out-left');
      
      // Show and animate main sidebar in
      sideSubMain.classList.remove('hidden');
      sideSubMain.classList.add('slide-in-left');
      
      // Remove animation classes after completion
      setTimeout(() => {
          sideSubMain.classList.remove('slide-in-left');
      }, 500);
  });
});
// top 버튼
$(document).ready(function() { 

  // Top 버튼 특정 스크롤높이에서만 보이기 / 숨기기
  // $(window).scroll(function(){
  //   if($(this).scrollTop() > 100){
  //       $('#top-btn').fadeIn();
  //     }else{
  //       $('#top-btn').fadeOut();
  //     }
  // });
  
  // Top 버튼 클릭시 페이지 상단으로 이동
   $('.box3, .top-btn').click(function(){
    $('html, body').animate({scrollTop : 0}, 800);
      return false;
  });
  
});

// 오브젝트 애니메이션 AOS
$(document).ready(function(){
  new WOW().init();
});

// top_menu_icon
$(document).ready(function(){
  $(".top_menu_icon").click(function () {
    const $this = $(this);
  
    if ($this.hasClass("active")) {
      $this.removeClass("active");
    } else {
      $this.addClass("active");
    }
  });
});

// sub-top-bar 열기/닫기
$(document).ready(function(){
  // Get necessary DOM elements
// Get necessary DOM elements
const subMenuBtn = document.querySelector('.sub-menu-btn');
const topMenuIcon = document.querySelector('.top_menu_icon');
const subTopBar = document.querySelector('.sub-top-bar');
const closeBtn = document.querySelector('.close-btn');

// Function to open menu
function openMenu() {
    subTopBar.classList.add('active');
    topMenuIcon.classList.add('active');
    document.body.style.overflow = 'hidden'; // 전체 페이지 스크롤 방지
}

// Function to close menu
function closeMenu() {
    subTopBar.classList.remove('active');
    topMenuIcon.classList.remove('active');
    document.body.style.overflow = ''; // 전체 페이지 스크롤 복원
}

// Add click event listeners
subMenuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (subTopBar.classList.contains('active')) {
        closeMenu();
    } else {
        openMenu();
    }
});

// Close menu when close button is clicked
closeBtn.addEventListener('click', closeMenu);

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (subTopBar.classList.contains('active') && 
        !subTopBar.contains(e.target) && 
        !subMenuBtn.contains(e.target)) {
        closeMenu();
    }
});

// Close menu when pressing Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && subTopBar.classList.contains('active')) {
        closeMenu();
    }
});
});
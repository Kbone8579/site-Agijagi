window.addEventListener("DOMContentLoaded", function () {
    // p0 페이지만 원스크롤 적용
    const oneScrollPages = document.querySelectorAll(".fage, .page.p0");
    const oneScrollCount = oneScrollPages.length;
    
    // 스크롤 관련 변수
    let isScrolling = false;
    let scrollTimeout;
    
    // 부드러운 스크롤 클래스 정의
    class Scrooth {
      constructor({element = window, strength = 10, acceleration = 1.2, deceleration = 0.975} = {}) {
        this.element = element;
        this.distance = strength;
        this.acceleration = acceleration;
        this.deceleration = deceleration;
        this.running = false;
        
        // 원스크롤이 적용된 페이지가 화면에 있는지 확인하는 함수
        this.isOneScrollPageVisible = () => {
          for (let i = 0; i < oneScrollCount; i++) {
            const rect = oneScrollPages[i].getBoundingClientRect();
            if (rect.top <= 50 && rect.bottom >= 50) {
              return {
                isVisible: true,
                element: oneScrollPages[i],
                index: i
              };
            }
          }
          return { isVisible: false };
        };
        
        // 스크롤 이벤트 핸들러 바인딩
        this.element.addEventListener('wheel', this.scrollHandler.bind(this), {passive: false});
        this.scroll = this.scroll.bind(this);
        
        // 초기 스크롤 상태 설정
        this.top = this.element.pageYOffset || this.element.scrollTop || 0;
      }
      
      scrollHandler(e) {
        // 이미 스크롤 중이면 추가 이벤트 무시
        if (isScrolling) return;
        
        e.preventDefault();
        const delta = e.deltaY > 0 ? 1 : -1;
        
        // 현재 원스크롤 페이지가 표시되어 있는지 확인
        const currentOneScrollPage = this.isOneScrollPageVisible();
        
        if (currentOneScrollPage.isVisible) {
          // 원스크롤 페이지가 화면에 있는 경우 페이지 단위 스크롤 적용
          let targetSection = null;
          
          if (delta > 0 && currentOneScrollPage.index < oneScrollCount - 1) {
            // 다음 페이지로 이동
            for (let i = currentOneScrollPage.index + 1; i < oneScrollCount; i++) {
              if (window.getComputedStyle(oneScrollPages[i]).display !== 'none') {
                targetSection = oneScrollPages[i];
                break;
              }
            }
            
            // 원스크롤 페이지의 마지막이면 일반 스크롤로 전환
            if (!targetSection) {
              this.smoothScroll(delta);
              return;
            }
          } else if (delta < 0 && currentOneScrollPage.index > 0) {
            // 이전 페이지로 이동
            for (let i = currentOneScrollPage.index - 1; i >= 0; i--) {
              if (window.getComputedStyle(oneScrollPages[i]).display !== 'none') {
                targetSection = oneScrollPages[i];
                break;
              }
            }
          } else if (delta < 0 && currentOneScrollPage.index === 0) {
            // 첫 페이지에서 위로 스크롤 시 아무 동작 안함
            return;
          } else {
            // 마지막 원스크롤 페이지에서 아래로 스크롤 시 일반 스크롤로 전환
            this.smoothScroll(delta);
            return;
          }
          
          if (targetSection) {
            isScrolling = true;
            const target = window.pageYOffset + targetSection.getBoundingClientRect().top;
            
            // 부드러운 페이지 전환 애니메이션
            this.animateScroll(target);
            
            // 스크롤이 완료된 후 잠금 해제
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
              isScrolling = false;
            }, 1000);
          }
        } else {
          // 원스크롤 페이지가 화면에 없는 경우 부드러운 스크롤 적용
          this.smoothScroll(delta);
        }
      }
      
      // 일반적인 부드러운 스크롤
      smoothScroll(delta) {
        isScrolling = true;
        
        if (!this.running) {
          this.top = this.element.pageYOffset || this.element.scrollTop || 0;
          this.running = true;
          this.currentDistance = delta > 0 ? 0.1 : -0.1;
          this.isDistanceAsc = true;
          this.scrollAnimate();
        } else {
          this.isDistanceAsc = false;
          this.currentDistance = delta > 0 ? this.distance : -this.distance;
        }
        
        // 짧은 시간 후 스크롤 잠금 해제
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isScrolling = false;
        }, 150);
      }
      
      // 애니메이션 스크롤 (원스크롤 페이지 간 이동)
      animateScroll(target) {
        const startPosition = window.pageYOffset;
        const distance = target - startPosition;
        const duration = 800;
        let startTime = null;
        
        const animation = (currentTime) => {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / duration, 1);
          
          // 이징 함수 적용 (ease-in-out)
          const easeInOut = progress => progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
          
          window.scrollTo(0, startPosition + distance * easeInOut(progress));
          
          if (timeElapsed < duration) {
            requestAnimationFrame(animation);
          } else {
            this.running = false;
          }
        };
        
        requestAnimationFrame(animation);
      }
      
      // 부드러운 스크롤 애니메이션
      scrollAnimate() {
        if (this.running) {
          this.currentDistance *= this.isDistanceAsc === true ? this.acceleration : this.deceleration;
          Math.abs(this.currentDistance) < 0.1 && this.isDistanceAsc === false ? this.running = false : 1;
          Math.abs(this.currentDistance) >= Math.abs(this.distance) ? this.isDistanceAsc = false : 1;
          
          this.top += this.currentDistance;
          this.element.scrollTo(0, this.top);
          
          requestAnimationFrame(this.scrollAnimate.bind(this));
        }
      }
    }
    
    // 부드러운 스크롤 초기화
    const scroll = new Scrooth({
      element: window,
      strength: 24,
      acceleration: 1.8,
      deceleration: 0.945,
    });
  });
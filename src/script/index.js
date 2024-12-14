window.onload = function(){

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
  };


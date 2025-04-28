(function () {
   'use strict'

   let timerId

   const get = (target) => {
      return document.querySelector(target)
   }

   const $progressBar = get('.progress-bar')

   const onScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      // console.log(scrollTop);

      const height = //보여지는 영역을 제외한 길이
         document.documentElement.scrollHeight - //스크롤의 총길이
         document.documentElement.clientHeight //보여지는 영역 

      //결국 이걸 통해 progress-bar 의 width 값을 채워줄 것임 
      const scrollWidth = (scrollTop / height) * 100;
      $progressBar.style.width = scrollWidth + '%' //스타일 변경
   }

   window.addEventListener('scroll', () => onScroll())

})()

hetBody = document.querySelector('body');
hetHeader = document.querySelector('header');

hetBody.addEventListener('wheel',(event) => {
   let wheel = event.wheelDeltaY;

   if(wheel > 0) {
      hetHeader.setAttribute("style", "background-color: #transparent;")
   }
   else {
      hetHeader.setAttribute("style", "background: #12121263;")
    }
})


// zz
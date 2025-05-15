// 진행바
(function () {
   'use strict'

   let timerId

   const get = (target) => {
      return document.querySelector(target)
   }

   const $progressBar = get('.progress-bar')

   const onScroll = () => {
      const scrollTop = document.documentElement.scrollTop;


      const height =
         document.documentElement.scrollHeight -
         document.documentElement.clientHeight

      const scrollWidth = (scrollTop / height) * 100;
      $progressBar.style.width = scrollWidth + '%'
   }

   window.addEventListener('scroll', () => onScroll())

})()

// 헤더 백그라운드
hetBody = document.querySelector('body');
hetHeader = document.querySelector('header');

hetBody.addEventListener('wheel', (event) => {
   let wheel = event.wheelDeltaY;

   if (wheel > 0) {
      hetHeader.setAttribute("style", "background-color: #transparent;")
   }
   else {
      hetHeader.setAttribute("style", "background: #12121263;")
   }
})

const menuItems = document.querySelectorAll('.header_menu li a');

menuItems.forEach(item => {
   item.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = item.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
         top: targetSection.offsetTop - document.querySelector('header').offsetHeight, 
         behavior: 'smooth'
      });

      history.pushState(null, null, window.location.pathname);
   });
});

const menuLogo = document.querySelector('.header_title');
console.log(menuLogo)

menuLogo.addEventListener('click', (e) => {
   e.preventDefault();
   window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'  // 부드러운 스크롤 동작
   });
   history.pushState(null, null, window.location.pathname);
});
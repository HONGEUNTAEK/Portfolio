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
      hetHeader.setAttribute("style", "background-color: transparent;")
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
      behavior: 'smooth'
   });
   history.pushState(null, null, window.location.pathname);
});

window.addEventListener('scroll', () => {
   if (document.documentElement.scrollTop === 0) {
      hetHeader.style.background = "transparent";
   }
});


// Learn more

const learnMoreBtn = document.querySelector('.intro_button');

learnMoreBtn.addEventListener('click', (e) => {
   e.preventDefault();
   const targetSection = document.getElementById('about_title');

   window.scrollTo({
      top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
      behavior: 'smooth'
   });
});

// 자기소개서 자세히 보기

const aboutMoreBtn = document.querySelector('.about_more');
const aboutFullText = document.querySelector('.about_full_text');

aboutMoreBtn.addEventListener('click', () => {
   if (aboutFullText.style.display === "block") {
      aboutFullText.style.display = "none";
      aboutMoreBtn.textContent = "자세히 보기 >";
      aboutMoreBtn.style.color = "#00ff849c";
   } else {
      aboutFullText.style.display = "block";
      aboutMoreBtn.textContent = "그만 보기 X";
      aboutMoreBtn.style.color = "#00ff849c";
   }
});


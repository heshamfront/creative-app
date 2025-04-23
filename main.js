//  to header section script
  
  // Mobile Menu Toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');

  mobileMenuButton.addEventListener('click', function(e) {
      e.stopPropagation();
      mobileMenu.classList.toggle('open');
      
      // تغيير الأيقونة بين القائمة والإغلاق
      if (mobileMenu.classList.contains('open')) {
          menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>`;
      } else {
          menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>`;
      }
  });

  // إغلاق القائمة عند النقر خارجها
  document.addEventListener('click', function(e) {
      if (!mobileMenu.contains(e.target) && e.target !== mobileMenuButton) {
          mobileMenu.classList.remove('open');
          menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>`;
      }
  });

  // منع إغلاق القائمة عند النقر عليها
  mobileMenu.addEventListener('click', function(e) {
      e.stopPropagation();
  });


//   to app case show section
  // Initialize Swiper
  new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

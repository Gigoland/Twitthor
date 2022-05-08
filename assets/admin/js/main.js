(function() {
  const sidebarNavWrapper = document.querySelector('.sidebar-nav-wrapper');
  const mainWrapper = document.querySelector('.main-wrapper');
  const menuToggleButton = document.querySelector('#menu-toggle');
  const menuToggleButtonIcon = document.querySelector('#menu-toggle i');
  const overlay = document.querySelector('.overlay');

  menuToggleButton.addEventListener('click', () => {
    sidebarNavWrapper.classList.toggle('active');
    overlay.classList.add('active');
    mainWrapper.classList.toggle('active');
    if (document.body.clientWidth > 1200) {
      if (menuToggleButtonIcon.classList.contains('fa-chevron-left')) {
        menuToggleButtonIcon.classList.remove('fa-chevron-left');
        menuToggleButtonIcon.classList.add('fa-bars');
      } else {
        menuToggleButtonIcon.classList.remove('fa-bars');
        menuToggleButtonIcon.classList.add('fa-chevron-left');
      }
    } else {
      if (menuToggleButtonIcon.classList.contains('fa-chevron-left')) {
        menuToggleButtonIcon.classList.remove('fa-chevron-left');
        menuToggleButtonIcon.classList.add('fa-bars');
      }
    }
  });
  overlay.addEventListener('click', () => {
    sidebarNavWrapper.classList.remove('active');
    overlay.classList.remove('active');
    mainWrapper.classList.remove('active');
  });
})();

// @todo error manager
window.ajaxError = function(error) {
  console.error('Error:', error);
};
// @todo error manager
window.ajaxResponseError = function(error) {
  console.error('Error:', error);
};

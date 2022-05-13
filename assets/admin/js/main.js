const swal = require('sweetalert2');

// @todo error manager
window.ajaxError = function(errors) {
  console.error('Errors:', errors);
};

// @todo error manager
window.ajaxResponseError = function(response) {
  if (response.error) {
    swal.fire({
      icon: 'error',
      title: response.error.title,
      text: response.error.detail,
      footer: '<strong>' + response.error.status + '</strong>'
    });
  } else if (response.warning) {
    swal.fire({
      icon: 'warning',
      title: response.warning.title,
      text: response.warning.detail,
      footer: '<strong>' + response.warning.status + '</strong>'
    });
  } else {
    swal.fire({
      icon: 'info',
      title: response.info.title,
      text: response.info.detail,
      footer: '<strong>' + response.info.status + '</strong>'
    });
  }
  console.error('Erros:', response);
};

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

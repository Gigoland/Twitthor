const swal = require('sweetalert2');

// Ajax success response manager
window.ajaxResponseSuccess = function(response) {
  swal.fire({
    icon: 'success',
    title: response.detail.title,
    text: response.detail.message,
    showConfirmButton: false,
    timer: 1500
  });
};

// Ajax catch errors manager
window.ajaxCatchAlert = function(response) {
  console.log('Erros:', response);
}

// Ajax response manager
window.ajaxResponseAlert = function(response) {
  if (response.error) {
    swal.fire({
      icon: 'error',
      title: response.error.title,
      text: response.error.message,
      footer: '<strong>' + response.error.status + '</strong>'
    });
  } else if (response.warning) {
    swal.fire({
      icon: 'warning',
      title: response.warning.title,
      text: response.warning.message,
      footer: '<strong>' + response.warning.status + '</strong>'
    });
  } else if (response.info) {
    swal.fire({
      icon: 'info',
      title: response.info.title,
      text: response.info.message,
      footer: '<strong>' + response.info.status + '</strong>'
    });
  } else {
    console.log('Erros:', response);
  }
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

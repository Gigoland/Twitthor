import axios from 'axios';

const swal = require('sweetalert2');

//
const setTwApiSettingActive = function() {
  let $loader = this.parentElement.querySelector('.switch-loader');
  document.querySelectorAll('.js-switch-is-active').forEach(el => el.style.display = 'none');
  $loader.style.display = 'block';
  setTimeout(() => {
    axios.post(this.value, {
      'isActive': this.checked
    })
    .then(response => response.data)
    .then(data => {
      swal.fire({
        icon: 'success',
        title: data.message,
        showConfirmButton: false,
        timer: 1500
      });
      $loader.style.display = 'none';
      document.querySelectorAll('.js-switch-is-active').forEach(el => el.style.display = 'block');
    })
    .catch(error => {
      ajaxError(error);
    });
  }, 50);
};

// Onload
(function() {
  if (document.querySelector('.js-switch-is-active')) {
    document.querySelectorAll('.js-switch-is-active').forEach(el => el.addEventListener('change', setTwApiSettingActive));
  }
})();

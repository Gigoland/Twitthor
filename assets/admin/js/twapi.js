import axios from 'axios';

const swal = require('sweetalert2');

//
const setTwApiSettingActive = function() {
  let $loader = this.parentElement.querySelector('.switch-loader');
  document.querySelectorAll('.switch-is-active').forEach(function(that) {
    that.style.display = 'none';
  });
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
      document.querySelectorAll('.switch-is-active').forEach(function(that) {
        that.style.display = 'block';
      });
    })
    .catch(error => {
      ajaxError(error);
    });
  }, 50);
};

// Onload
(function() {
  document.querySelectorAll('.switch-is-active').forEach(el => el.addEventListener('change', setTwApiSettingActive));
})();

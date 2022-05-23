import axios from 'axios';

// Active
const setTwApiSettingActive = function() {
  let $loader = this.parentElement.querySelector('.switch-loader'),
      target = this.getAttribute('data-target');
  document.querySelectorAll('.js-switch-is-active').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.js-tw-auth-btn').forEach(el => el.style.display = 'none');
  $loader.style.display = 'block';
  setTimeout(() => {
    axios.post(this.value, {
      'isActive': this.checked
    })
    .then(response => response.data)
    .then(data => {
      ajaxResponseSuccess(data);
      $loader.style.display = 'none';
      document.querySelectorAll('.js-switch-is-active').forEach(el => el.style.display = 'block');
      document.querySelector('.js-tw-auth-btn-' + target).style.display = 'block';
    })
    .catch(error => {
      ajaxCatchAlert(error);
    });
  }, 50);
};

// Onload
(function() {
  if (document.querySelector('.js-switch-is-active')) {
    document.querySelectorAll('.js-switch-is-active').forEach(el => el.addEventListener('change', setTwApiSettingActive));
  }
})();

// any CSS you import will output into a single css file (app.css in this case)
import './styles/admin.scss';

// You can specify which plugins you need
import {Modal, Tooltip, Toast, Popover} from 'bootstrap';

// start the Stimulus application
import './bootstrap';

import './admin/js/main';

// Variables
var modalTwApiKeys = null,
    $twUpdateFollowingForm = null,
    $twUpdateFollowersForm = null,
    $twNextTokenInput = null,
    $twApiKeysModal = null,
    $twApiKeysModalLoader = null,
    $twApiKeysModalAlert = null,
    $twApiKeysModalAlertMsg = null,
    redirect = null;

// Modal content
const showTwApiKeysModal = function(response) {
  switch (response.code) {
    case 'success':
      $twApiKeysModal.querySelector('.modal-body').innerHTML = response.html;
      $twApiKeysModalAlert = $twApiKeysModal.querySelector('.alert-box');
      $twApiKeysModalAlertMsg = $twApiKeysModalAlert.querySelector('#ajax-message');
      modalTwApiKeys.show();
      break;
    case 'error':
      //@todo
      break;
  }
};

// After update
const callbackUpdate = function(json) {
  console.log(json);//@todo remove
  $twApiKeysModal.querySelectorAll('.ev').forEach(function($btn) {
    $btn.disabled = false;
  });
  $twApiKeysModal.querySelector('.btn-ko').innerHTML = 'Finish';
  $twApiKeysModalLoader.style.display = 'none';
  if (json.code === 'success') {
    if (json.nextToken) {
      $twNextTokenInput.value = json.nextToken;
      $twApiKeysModal.querySelector('.btn-ok').innerHTML = 'Continue';
    } else {
      $twApiKeysModal.querySelector('.btn-ok').disabled = true;
      $twApiKeysModal.querySelector('.btn-ok').innerHTML = 'Done';
    }
    $twApiKeysModalAlertMsg.innerHTML = 'Checked : ' + json.checked + ' / Created : ' + json.created + ' / Updated : ' + json.updated;
    $twApiKeysModalAlert.style.display = 'block';
    redirect = json.path;
  } else {
    //@todo
  }
};

// Get update following
const callUpdateFollowing = function(callback) {
  fetch($twUpdateFollowingForm.action.replace(/\/[^\/]*$/, '/' + $twApiKeysModal.querySelector('#twapi-key').value), {
    method: 'POST',
    body: new FormData($twUpdateFollowingForm)
  })
  .then(response => response.json())
  .then(json => {
    callback(json);
  })
  .catch((error) => {
    console.error('Error:', error);//@todo
  });
};

// Get update followers
const callUpdateFollowers = function(callback) {
  fetch($twUpdateFollowersForm.action.replace(/\/[^\/]*$/, '/' + $twApiKeysModal.querySelector('#twapi-key').value), {
    method: 'POST',
    body: new FormData($twUpdateFollowersForm)
  })
  .then(response => response.json())
  .then(json => {
    callback(json);
  })
  .catch((error) => {
    console.error('Error:', error);//@todo
  });
};

// onload
window.onload = function() {
  $twUpdateFollowingForm = document.querySelector('#ajax-update-following');
  $twUpdateFollowersForm = document.querySelector('#ajax-update-followers');
  $twNextTokenInput = document.querySelector('#ajax_tw_api_next_token');
  $twApiKeysModal = document.querySelector('#modal-twapi-keys');

  // Get modal content
  if (document.querySelector('#ajax-get-twapi-keys')) {
    document.querySelector('#ajax-get-twapi-keys').addEventListener('submit', function(e) {
      e.preventDefault();
      e.stopPropagation();
      fetch(this.action, {
        method: 'POST',
        body: new FormData(e.target)
      })
      .then(response => response.json())
      .then(json => {
        showTwApiKeysModal(json);
      })
      .catch((error) => {
        console.error('Error:', error);//@todo
      });
    });
  }

  // Modal
  if ($twApiKeysModal) {
    modalTwApiKeys = new Modal($twApiKeysModal);
    $twApiKeysModalLoader = $twApiKeysModal.querySelector('#loader');

    // On close modal
    $twApiKeysModal.addEventListener('hide.bs.modal', function() {
      console.log('Modal close'); //@todo remove
      if (redirect) {
        window.location.href = redirect;
      }
    });

    // Update following
    if ($twApiKeysModal.querySelector('#btn-update-following')) {
      $twApiKeysModal.querySelector('#btn-update-following').addEventListener('click', function(e) {
        $twApiKeysModalAlert.style.display = 'none';
        $twApiKeysModalLoader.style.display = 'block';
        $twApiKeysModal.querySelectorAll('.ev').forEach(function($btn) {
          $btn.disabled = true;
        });
        callUpdateFollowing(function(json) {
          callbackUpdate(json);
        });
      });
    }

    // Update followers
    if ($twApiKeysModal.querySelector('#btn-update-followers')) {
      $twApiKeysModal.querySelector('#btn-update-followers').addEventListener('click', function(e) {
        $twApiKeysModalLoader.style.display = 'block';
        $twApiKeysModal.querySelectorAll('.ev').forEach(function($btn) {
          $btn.disabled = true;
        });
        callUpdateFollowers(function(json) {
          callbackUpdate(json);
        });
      });
    }
  }
};

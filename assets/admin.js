// any CSS you import will output into a single css file (app.css in this case)
import './styles/admin.scss';

// You can specify which plugins you need
import {Modal, Tooltip, Toast, Popover} from 'bootstrap';

// start the Stimulus application
import './bootstrap';

import './admin/js/main';

(function () {
  const $updateFollowingForm = document.querySelector('#ajax-update-following');
  const $updateFollowersForm = document.querySelector('#ajax-update-followers');
  const $twApiKeysModal = document.querySelector('#modal-twapi-keys');
  const modalTwApiKeys = new Modal($twApiKeysModal);

  // Get modal content
  document.querySelector('#ajax-get-twapi-keys').addEventListener('submit', function(e) {
    e.preventDefault();
    e.stopPropagation();
    fetch(this.action, {
      method: 'POST',
      body: new FormData(e.target)
    })
    .then(response => response.json())
    .then(json => {
      twApiKeysHandleResponse(json);
    })
    .catch((error) => {
      console.error('Error:', error);//@todo
    });
  });

  // Modal content
  const twApiKeysHandleResponse = function(response) {
    switch (response.code) {
      case 'success':
        $twApiKeysModal.querySelector('.modal-body').innerHTML = response.html;
        modalTwApiKeys.show();
        break;
    }
  };

  // Update following
  if ($twApiKeysModal.querySelector('#btn-update-following')) {
    $twApiKeysModal.querySelector('#btn-update-following').addEventListener('click', function(e) {
      $twApiKeysModal.querySelector('.loader').style.display = 'block';
      $twApiKeysModal.querySelectorAll('.btn').forEach(function($btn) {
        $btn.disabled = true;
      });
      fetch($updateFollowingForm.action.replace(/\/[^\/]*$/, '/' + $twApiKeysModal.querySelector('#twapi-key').value), {
        method: 'POST',
        body: new FormData($updateFollowingForm)
      })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        //window.location.href = json.path;
      })
      .catch((error) => {
        console.error('Error:', error);//@todo
      });
    });
  }

  // Update followers
  if ($twApiKeysModal.querySelector('#btn-update-followers')) {
    $twApiKeysModal.querySelector('#btn-update-followers').addEventListener('click', function(e) {
      $twApiKeysModal.querySelector('.loader').style.display = 'block';
      $twApiKeysModal.querySelectorAll('.btn').forEach(function($btn) {
        $btn.disabled = true;
      });
      fetch($updateFollowersForm.action.replace(/\/[^\/]*$/, '/' + $twApiKeysModal.querySelector('#twapi-key').value), {
        method: 'POST',
        body: new FormData($updateFollowersForm)
      })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        //window.location.href = json.path;
      })
      .catch((error) => {
        console.error('Error:', error);//@todo
      });
    });
  }
})();

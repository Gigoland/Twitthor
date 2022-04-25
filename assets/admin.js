// any CSS you import will output into a single css file (app.css in this case)
import './styles/admin.scss';

// You can specify which plugins you need
import {Modal, Tooltip, Toast, Popover} from 'bootstrap';

// start the Stimulus application
import './bootstrap';

import './admin/js/main';

(function () {
  const $updateFollofingForm = document.querySelector('#ajax-update-following');
  const $twApiKeysModal = document.querySelector('#modal-twapi-keys');
  const modalTwApiKeys = new Modal($twApiKeysModal);

  //
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

  //
  const twApiKeysHandleResponse = function(response) {
    switch (response.code) {
      case 'success':
        $twApiKeysModal.querySelector('.modal-body').innerHTML = response.html;
        modalTwApiKeys.show();
        break;
    }
  };

  //
  $twApiKeysModal.querySelector('.btn-ok').addEventListener('click', function(e) {
    $twApiKeysModal.querySelector('.loader').style.display = 'block';
    $twApiKeysModal.querySelectorAll('.btn').forEach(function($btn) {
      $btn.disabled = true;
    });

    fetch($updateFollofingForm.action.replace(/\/[^\/]*$/, '/' + $twApiKeysModal.querySelector('#twapi-key').value), {
      method: 'POST',
      body: new FormData($updateFollofingForm)
    })
    .then(response => response.json())
    .then(json => {
      window.location.href = json.path;
    })
    .catch((error) => {
      console.error('Error:', error);//@todo
    });
  });
})();

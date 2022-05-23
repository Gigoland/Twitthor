import axios from 'axios';
import {Modal} from 'bootstrap';

// Onload
(function() {
  const $twApiSettingsModal = document.querySelector('#modal-twapi-settings');

  // Variables
  var twApiSettingsModalPlugin = null,
      $twApiSettingsModalLoader = null,
      $twApiSettingsModalAlertCount = null,
      $twApiSettingsModalAlertResult = null,
      $twApiSettingsModalAlertMessage = null,
      updateDone = false,
      redirect = null;

  // Show follow update modal
  const showTwApiSettingsModal = function(data) {
    if (data.success) {
      $twApiSettingsModal.querySelector('.modal-body').innerHTML = data.html;
      twApiSettingsModalPlugin.show();
      if (data.warning) {
        $twApiSettingsModal.querySelector('.btn-ok').style.display = 'none';
      }
    } else {
      ajaxResponseAlert(data);
    }
  };

  // Get modal html content
  const getAwApiKeysModal = function() {
    setTimeout(() => {
      axios.post(this.href)
      .then(response => response.data)
      .then(data => {
        setTimeout(() => {
          showTwApiSettingsModal(data);
        }, 50);
      })
      .catch(error => {
        ajaxCatchAlert(error);
      });
    }, 50);
  };

  // After update
  const ajaxFollowCallback = function(data) {
    $twApiSettingsModal.querySelectorAll('.ev').forEach(el => el.disabled = false);
    $twApiSettingsModal.querySelector('.btn-ko').innerHTML = 'Finish';
    $twApiSettingsModalLoader.style.display = 'none';
    if (data.success) {
      if (data.next) {
        updateDone = false;
        $twApiSettingsModal.querySelector('.btn-ok').innerHTML = 'Go to next';
      } else {
        updateDone = true;
        $twApiSettingsModal.querySelector('.btn-ok').innerHTML = 'Done';
        $twApiSettingsModal.querySelector('.btn-ok').setAttribute('data-bs-dismiss', 'modal');
        $twApiSettingsModal.querySelector('.btn-ok').disabled = false;
        $twApiSettingsModal.querySelector('.btn-ko').style.display = 'none';
      }
      $twApiSettingsModalAlertCount.innerHTML = data.callCount;
      $twApiSettingsModalAlertMessage.innerHTML = 'Checked : ' + data.checked + ' / Created : ' + data.created + ' / Updated : ' + data.updated;
      $twApiSettingsModalAlertResult.style.display = 'block';
      redirect = data.path;
    } else {
      twApiSettingsModalPlugin.hide();
      ajaxResponseAlert(data);
    }
  };

  // After unfollow
  const ajaxUnfollowCallback = function(data) {
    if (data.success) {
      ajaxResponseSuccess(data);
    } else {
      ajaxResponseAlert(data);
    }
  };

  // Get update following/folowers
  const callUpdateFollow = function() {
    if (!updateDone) {
      $twApiSettingsModalAlertResult.style.display = 'none';
      $twApiSettingsModalLoader.style.display = 'block';
      $twApiSettingsModal.querySelectorAll('.ev').forEach(el => el.disabled = true);
      setTimeout(() => {
        axios.post(this.value)
        .then(response => response.data)
        .then(data => {
          setTimeout(() => {
            ajaxFollowCallback(data);
          }, 50);
        })
        .catch(error => {
          ajaxCatchAlert(error);
        });
      }, 50);
    }
  };

  // Unfollow
  const callUnfollow = function() {
    if (!updateDone) {
      setTimeout(() => {
        axios.post(this.value)
        .then(response => response.data)
        .then(data => {
          setTimeout(() => {
            ajaxUnfollowCallback(data);
          }, 50);
        })
        .catch(error => {
          ajaxCatchAlert(error);
        });
      }, 50);
    }
  };

  // Tw profile
  const shwoTwProfile = function() {
    setTimeout(() => {
      let win = window.open(
        this.href,
        "_blank",
        "location=no,menubar=no,status=no,titilebar=no,resizable=no,top=0,left=0,width=600,height=500"
      );
      win.focus();
    }, 50);
  };

  // Modal
  if ($twApiSettingsModal) {
    twApiSettingsModalPlugin = new Modal($twApiSettingsModal);
    $twApiSettingsModalLoader = $twApiSettingsModal.querySelector('.modal-loader');

    // On show modal
    $twApiSettingsModal.addEventListener('shown.bs.modal', function() {
      updateDone = false;
      $twApiSettingsModalAlertCount = $twApiSettingsModal.querySelector('#twapi-call-counts');
      $twApiSettingsModalAlertResult = $twApiSettingsModal.querySelector('.alert-box-result');
      $twApiSettingsModalAlertMessage = $twApiSettingsModalAlertResult.querySelector('#alert-box-result-message');
    });

    // On close modal
    $twApiSettingsModal.addEventListener('hide.bs.modal', function() {
      if (redirect) {
        window.location.href = redirect;
      }
    });

    // Update following/followers
    if ($twApiSettingsModal.querySelector('#js-btn-update-follow')) {
      $twApiSettingsModal.querySelector('#js-btn-update-follow').addEventListener('click', callUpdateFollow);
    }
  }

  // Get modal content
  if (document.querySelector('#js-btn-update')) {
    document.querySelector('#js-btn-update').addEventListener('click', getAwApiKeysModal);
  }

  // Get window
  if (document.querySelector('.js-btn-tw-profile')) {
    document.querySelectorAll('.js-btn-tw-profile').forEach(el => el.addEventListener('click', shwoTwProfile));
  }

  // Unfollow
  if (document.querySelector('.js-btn-unfollow')) {
    document.querySelectorAll('.js-btn-unfollow').forEach(el => el.addEventListener('click', callUnfollow));
  }
})();

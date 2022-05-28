import axios from 'axios';
import {Modal} from 'bootstrap';
const swal = require('sweetalert2');

// Onload
(function() {
  const $twApiSettingsModal = document.querySelector('#modal-twapi-settings');

  // Variables
  var twApiSettingsModalPlugin = null,
      $twApiSettingsModalLoader = null,
      $twApiSettingsModalBtnGo = null,
      $twApiSettingsModalBtnGoOne = null,
      $twApiSettingsModalBtnGoAll = null,
      $twApiSettingsModalBtnGoPlatonic = null,
      $twApiSettingsModalAlertCount = null,
      $twApiSettingsModalAlertCountFollowing = null,
      $twApiSettingsModalAlertCountFollowers = null,
      $twApiSettingsModalAlertResult = null,
      $twApiSettingsModalAlertMessage = null,
      updateAllFollow = false,
      updateDone = false,
      updateUrl = null,
      redirect = null;

  // Show follow update modal
  const showTwApiSettingsModal = function(data) {
    if (data.success) {
      $twApiSettingsModal.querySelector('.modal-body').innerHTML = data.html;
      setTimeout(() => {
        twApiSettingsModalPlugin.show();
        if (data.warning) {
          if ($twApiSettingsModalBtnGoPlatonic) {
            $twApiSettingsModalBtnGoPlatonic.style.display = 'none';
          } else {
            $twApiSettingsModalBtnGoOne.style.display = 'none';
            $twApiSettingsModalBtnGoAll.style.display = 'none';
          }
        }
      }, 50);
    } else {
      ajaxResponseAlert(data);
    }
  };

  // Get modal html content
  const getTwApiSettingModal = function() {
    this.style.display = 'none';
    document.querySelector('#js-btn-update-modal-loader').style.display = 'block';
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

  // Enable bouttons events
  const enableModalEvents = function() {
    $twApiSettingsModal.querySelectorAll('.ev').forEach(el => el.disabled = false);
    if (updateDone) {
      $twApiSettingsModal.querySelector('.btn-ko').innerHTML = 'Finish';
    }
    $twApiSettingsModalLoader.style.display = 'none';
  };

  // Enable bouttons events
  const disableModalEvents = function() {
    $twApiSettingsModalLoader.style.display = 'block';
    $twApiSettingsModal.querySelectorAll('.ev').forEach(el => el.disabled = true);
  };

  // After update follow
  const ajaxFollowCallback = function(data) {
    if (data.success) {
      if (data.next) {
        updateDone = false;
        $twApiSettingsModalBtnGo.innerHTML = 'Go to next';
        // Get next
        if (updateAllFollow) {
          setTimeout(() => {
            callUpdateFollow();
          }, 1000);
        } else {
          enableModalEvents();
        }
      } else {
        updateDone = true;
        $twApiSettingsModalBtnGo.innerHTML = 'Done';
        $twApiSettingsModalBtnGo.setAttribute('data-bs-dismiss', 'modal');
        $twApiSettingsModalBtnGo.disabled = false;
        $twApiSettingsModal.querySelector('.btn-ko').style.display = 'none';
        enableModalEvents();
      }
      $twApiSettingsModalAlertCount.innerHTML = data.callCount;
      $twApiSettingsModalAlertMessage.innerHTML = `Checked : ${data.checked} / Created : ${data.created} / Updated : ${data.updated}`;
      setTimeout(() => {
        $twApiSettingsModalAlertResult.after($twApiSettingsModalAlertResult.cloneNode(true));
        $twApiSettingsModalAlertResult.style.display = 'none';
      }, 50);
      redirect = data.path;
    } else {
      twApiSettingsModalPlugin.hide();
      ajaxResponseAlert(data);
    }
  };

  // After update
  const ajaxPlatonicCallback = function(update, data) {
    if (data.success) {
      if (data.nextUpdate) {
        updateDone = false;
        $twApiSettingsModalBtnGo.innerHTML = 'Go to next';
        // Get next
        setTimeout(() => {
          callUpdatePlatonic(data.nextUpdate);
        }, 1000);
      } else {
        updateDone = true;
        $twApiSettingsModalBtnGo.innerHTML = 'Done';
        $twApiSettingsModalBtnGo.setAttribute('data-bs-dismiss', 'modal');
        $twApiSettingsModalBtnGo.disabled = false;
        $twApiSettingsModal.querySelector('.btn-ko').style.display = 'none';
        enableModalEvents();
      }
      let icon = 'forward';
      if (update === 'following') {
        $twApiSettingsModalAlertCountFollowing.innerHTML = data.callCount;
      } else {
        icon = 'backward';
        $twApiSettingsModalAlertCountFollowers.innerHTML = data.callCount;
      }
      $twApiSettingsModalAlertMessage.innerHTML = `<i class="fa-solid fa-${icon}"></i> Checked : ${data.checked} / Created : ${data.created} / Updated : ${data.updated}`;
      setTimeout(() => {
        $twApiSettingsModalAlertResult.after($twApiSettingsModalAlertResult.cloneNode(true));
        $twApiSettingsModalAlertResult.style.display = 'none';
      }, 50);
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
      $twApiSettingsModalAlertMessage.innerHTML = 'Updating... Please do not close.';
      $twApiSettingsModalAlertResult.style.display = 'block';
      disableModalEvents();
      setTimeout(() => {
        axios.post(updateUrl)
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

  // Get update platonics
  const callUpdatePlatonic = function(update) {
    if (!updateDone) {
      $twApiSettingsModalAlertMessage.innerHTML = 'Updating... Please do not close.';
      $twApiSettingsModalAlertResult.style.display = 'block';
      disableModalEvents();
      setTimeout(() => {
        axios.post(updateUrl, {
          'update': update
        })
        .then(response => response.data)
        .then(data => {
          setTimeout(() => {
            ajaxPlatonicCallback(update, data);
          }, 50);
        })
        .catch(error => {
          ajaxCatchAlert(error);
        });
      }, 50);
    }
  };

  // Unfollow
  const callUnfollow = function($el) {
    setTimeout(() => {
      axios.post($el.value)
      .then(response => response.data)
      .then(data => {
        setTimeout(() => {
          ajaxUnfollowCallback(data);
          if (data.success) {
            document.querySelector(`#row-${$el.getAttribute('data-target')}`).remove();
          } else {
            $el.style.display = 'block';
            $loader.style.display = 'none';
          }
        }, 50);
      })
      .catch(error => {
        ajaxCatchAlert(error);
      });
    }, 50);
  };

  // Safe unfollow
  const safeUnfollow = function() {
    let $this = this,
        $loader = $this.parentElement.querySelector('.unfollow-loader');
        $this.style.display = 'none';
    $loader.style.display = 'block';
    if ($this.classList.contains('is-verified')
     || $this.classList.contains('is-favorite')
    ) {
      let text = 'This is verified account.';
      if ($this.classList.contains('is-favorite')) {
        text = 'This is you favorited account.';
      }
      swal.fire({
        title: 'Are you sure ?',
        text: text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, unfollow it !'
      }).then((result) => {
        if (result.isConfirmed) {
          callUnfollow($this);
        } else {
          $this.style.display = 'block';
          $loader.style.display = 'none';
        }
      })
    } else {
      callUnfollow($this);
    }
  };

  // Modal
  if ($twApiSettingsModal) {
    twApiSettingsModalPlugin = new Modal($twApiSettingsModal);
    $twApiSettingsModalLoader = $twApiSettingsModal.querySelector('.modal-loader');
    $twApiSettingsModalBtnGoOne = $twApiSettingsModal.querySelector('#js-btn-update-follow');
    $twApiSettingsModalBtnGoAll = $twApiSettingsModal.querySelector('#js-btn-update-follow-all');
    $twApiSettingsModalBtnGoPlatonic = $twApiSettingsModal.querySelector('#js-btn-update-platonic');

    // On show modal
    $twApiSettingsModal.addEventListener('shown.bs.modal', function() {
      updateDone = false;
      $twApiSettingsModalAlertCount = $twApiSettingsModal.querySelector('#js-call-counts');
      $twApiSettingsModalAlertCountFollowing = $twApiSettingsModal.querySelector('#js-call-counts-following');
      $twApiSettingsModalAlertCountFollowers = $twApiSettingsModal.querySelector('#js-call-counts-followers');
      $twApiSettingsModalAlertResult = $twApiSettingsModal.querySelector('.alert-box-result');
      $twApiSettingsModalAlertMessage = $twApiSettingsModalAlertResult.querySelector('#alert-box-result-message');
      document.querySelector('.ajax-loader').style.display = 'none';
    });

    // On close modal
    $twApiSettingsModal.addEventListener('hide.bs.modal', function() {
      if (redirect) {
        window.location.href = redirect;
      }
    });

    // On closed modal
    $twApiSettingsModal.addEventListener('hidden.bs.modal', function() {
      if (!redirect) {
        document.querySelector('.ajax-loader').style.display = 'none';
        document.querySelector('.ajax-btn').style.display = 'block';
        if ($twApiSettingsModalBtnGoPlatonic) {
          $twApiSettingsModalBtnGoPlatonic.style.display = 'block';
        } else {
          $twApiSettingsModalBtnGoOne.style.display = 'block';
          $twApiSettingsModalBtnGoAll.style.display = 'block';
        }
        enableModalEvents();
      }
    });

    // Update following/followers
    if ($twApiSettingsModalBtnGoOne) {
      $twApiSettingsModalBtnGoOne.addEventListener('click', (e) => {
        $twApiSettingsModalBtnGo = $twApiSettingsModalBtnGoOne;
        $twApiSettingsModalBtnGoAll.style.display = 'none';
        updateUrl = e.currentTarget.value;
        callUpdateFollow();
      });
    }

    // Update all following/followers
    if ($twApiSettingsModalBtnGoAll) {
      $twApiSettingsModalBtnGoAll.addEventListener('click', (e) => {
        $twApiSettingsModalBtnGo = $twApiSettingsModalBtnGoAll;
        $twApiSettingsModalBtnGoOne.style.display = 'none';
        updateUrl = e.currentTarget.value;
        updateAllFollow = true;
        callUpdateFollow();
      });
    }

    // Update all platonics
    if ($twApiSettingsModalBtnGoPlatonic) {
      $twApiSettingsModalBtnGoPlatonic.addEventListener('click', (e) => {
        $twApiSettingsModalBtnGo = $twApiSettingsModalBtnGoPlatonic;
        updateUrl = e.currentTarget.value;
        callUpdatePlatonic('following');
      });
    }
  }

  // Favorite
  const setIsFavorite = function() {
    let $loader = this.parentElement.querySelector('.switch-loader'),
        $target = document.querySelector(`.js-btn-unfollow-${this.getAttribute('data-target')}`);
    this.style.display = 'none';
    $loader.style.display = 'block';
    setTimeout(() => {
      axios.post(this.value, {
        'isFavorite': this.checked
      })
      .then(response => response.data)
      .then(data => {
        setTimeout(() => {
          ajaxResponseSuccess(data);
          $loader.style.display = 'none';
          this.style.display = 'block';
          if (this.checked) {
            $target.classList.replace('btn-warning', 'btn-info');
            $target.classList.add('is-favorite');
          } else {
            $target.classList.replace('btn-info', 'btn-warning');
            $target.classList.remove('is-favorite');
          }
        }, 50);
      })
      .catch(error => {
        ajaxCatchAlert(error);
      });
    }, 50);
  };

  // Get modal content
  if (document.querySelector('#js-btn-update-modal')) {
    document.querySelector('#js-btn-update-modal').addEventListener('click', getTwApiSettingModal);
  }

  // Unfollow
  if (document.querySelector('.js-btn-unfollow')) {
    document.querySelectorAll('.js-btn-unfollow').forEach(el => el.addEventListener('click', safeUnfollow));
  }

  // Swith is favorite
  if (document.querySelector('.js-switch-isfavorite')) {
    document.querySelectorAll('.js-switch-isfavorite').forEach(el => el.addEventListener('change', setIsFavorite));
  }
})();

// any CSS you import will output into a single css file (admin.css in this case)
import './styles/admin.scss';

// Ajax
import axios from 'axios';

// You can specify which plugins you need
//import {Modal, Tooltip, Toast, Popover} from 'bootstrap';

// start the Stimulus application
import './bootstrap';

// ES6 Modules or TypeScript
import Swal from 'sweetalert2';

import './admin/js/main';
import './admin/js/twapi';
import './admin/js/follow';

// Onload
window.onload = function() {
	// Axios defaults headers
	axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
	axios.defaults.headers.common['X-XSRF-TOKEN'] = document.head.querySelector('meta[name="x-csrf-token"]').content;
};



window.$ = window.jQuery = require("jquery");

/*window.onload = function() {
    if (window.jQuery) {
        // jQuery is loaded
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
}*/

require('./migrate.js');
require('./slick.min.js');
require('./jquery.rotate.js');
require('./jClocksGMT.js');
require('./custom.js');

import './../sass/styles.sass';

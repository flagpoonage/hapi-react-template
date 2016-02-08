'use strict';

require('./shared/reset.pcss');
require('./shared/base.pcss');
require('./shared/fa.pcss');

let Root = require('./components/root');
let React = require('react'); React = React; // eslint hack
let ReactDOM = require('react-dom');

ReactDOM.render(<Root />, document.getElementById('app'));

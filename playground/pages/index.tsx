import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import {Layout} from './Page';

import {Pages} from './Pages'

ReactDOM.render(<Pages layout={Layout.Vertical} />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducer';
import { addComment } from './actions';

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));
store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


registerServiceWorker();

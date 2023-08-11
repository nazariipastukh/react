import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from './redux'

// Реалізувати crud операції з автівками з http://owu.linkpc.net/carsAPI/v1/doc використовуючи react redux

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, RouterProvider} from "react-router-dom";
import {store} from "./redux/store";
import {Provider} from 'react-redux'

import './utils/i18n';
import React from 'react';
import { Providers } from './utils/Providers';
import { router } from './utils/Router';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Providers>
            <Provider store={store}>
                <RouterProvider router={router} fallbackElement={<div>Загрузка...</div>} />
            </Provider>
        </Providers>
    </React.StrictMode>
    
);

/* <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter> */



import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import Loader from "./containers/Loader";

ReactDOM.render(
    <BrowserRouter>
        <Suspense fallback={<Loader/>}>
            <App />
        </Suspense>
    </BrowserRouter>,
    document.getElementById('root')
);
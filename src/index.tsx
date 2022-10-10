import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";
import AuthContext from "./contexts/auth-context";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthContext>
                <App/>
            </AuthContext>
        </BrowserRouter>
    </React.StrictMode>
    ,
    document.getElementById('root')
);

reportWebVitals();
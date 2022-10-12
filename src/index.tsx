import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import reportWebVitals from './reportWebVitals';
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";
import AuthContext from "./contexts/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthContext>
                <App/>
            </AuthContext>
        </BrowserRouter>
    </React.StrictMode>
);
reportWebVitals();
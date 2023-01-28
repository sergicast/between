import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { App } from "./App";
import "./App.scss";

const el = document.getElementById("app");

createRoot(el).render(
    <React.StrictMode>
        <BrowserRouter basename="/">
            <App />
        </BrowserRouter>
    </React.StrictMode>
)
    ;

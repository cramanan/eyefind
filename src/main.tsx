import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

window.onload = () =>
    window.addEventListener("message", (msg) => {
        if (msg && msg.data.type === "ui")
            document.body.style.display = msg.data.display;
    });

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

// Create a new root
const rootElement = document.getElementById("root"); // Replace 'root' with the ID of your new root element
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ShopContextProvider from "./Context/ShopContext.jsx";
import ShopContextProvider1 from "./Context/ShopContext2.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopContextProvider>
      <ShopContextProvider1>
        <App />
      </ShopContextProvider1>
    </ShopContextProvider>
  </React.StrictMode>
);

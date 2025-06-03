import './styles/index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // ✅ Import Provider from react-redux
import store from "./Pages/ClinicStore/Redux/Store.js"; // ✅ Import your Redux store
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}> {/* ✅ Wrap your app with Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);

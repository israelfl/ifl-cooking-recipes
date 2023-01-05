import React from "react";
import ReactDOM from "react-dom/client";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { supabase } from "./supabase/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./index.css";
import App from "./App";

import "./config/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <SessionContextProvider supabaseClient={supabase}>
    <App />
  </SessionContextProvider>
  // </React.StrictMode>
);

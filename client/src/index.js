import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { CurrentUserProvider } from "./CurrentUserContext";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <Auth0Provider
    domain="dev-l08vlvnd.us.auth0.com"
    clientId="1uAFTt3dfaI8dOZXc34A3IpkIhwaHPbZ"
    redirectUri={window.location.origin}
  >
    <CurrentUserProvider>
      <App />
    </CurrentUserProvider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

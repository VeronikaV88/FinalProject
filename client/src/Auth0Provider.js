// import React from "react";
// import { useHistory } from "react-router-dom";
// import { Auth0Provider } from "@auth0/auth0-react";

// const Auth0Provider = ({ children }) => {
//   const domain = process.env.REACT_APP_AUTH0_DOMAIN;
//   const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

//   const history = useHistory();

//   const onRedirectCallback = (appState) => {
//     history.push(appState?.returnTo || window.location.pathname);
//   };

//   return (
//     <Auth0Provider
//       domain={dev-l08vlvnd.us.auth0.com}
//       clientId={"1uAFTt3dfaI8dOZXc34A3IpkIhwaHPbZ"}
//       redirectUri={window.location.origin}
//       onRedirectCallback={onRedirectCallback}
//     >
//       {children}
//     </Auth0Provider>
//   );
// };

// export default Auth0Provider;

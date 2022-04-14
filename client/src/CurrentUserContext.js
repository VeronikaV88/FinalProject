import React, { useEffect, useState } from "react";

export const CurrentUserContext = React.createContext();

export const CurrentUserProvider = ({ children }) => {
  //   const sessionRestore = JSON.parse(sessionStorage.getItem("UserSession"));
  const [currentUser, setCurrentUser] = useState(sessionRestore);
  const [status, setStatus] = useState("loading");

  return (
    <CurrentUserContext.Provider
      value={{ setCurrentUser, currentUser, status }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

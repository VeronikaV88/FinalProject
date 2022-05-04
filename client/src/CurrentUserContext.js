import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export const CurrentUserContext = React.createContext();

export const CurrentUserProvider = ({ children }) => {
  //   const sessionRestore = JSON.parse(sessionStorage.getItem("UserSession"));
  const [currentUser, setCurrentUser] = useState(null);
  const [status, setStatus] = useState("loading");
  const { user, isAuthenticated, isLoading } = useAuth0();
  const history = useHistory();

  useEffect(() => {
    user &&
      fetch(`/api/getUser/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 200) {
            setCurrentUser(data.data);
          }
          if (data.status === 404) {
            history.push("/UserSignup");
          }
        });
  }, [user]);

  console.log(currentUser);

  return (
    <CurrentUserContext.Provider
      value={{ setCurrentUser, currentUser, status }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

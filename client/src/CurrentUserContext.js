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
          } else {
            let response = fetch("/api/createUser", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            })
              .then((res) => {
                return res.json();
              })
              .then((data) => {
                console.log(data);
              });
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

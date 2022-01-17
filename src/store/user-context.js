import React, { useState, useContext, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    type: false,
    zdjecie: "",
    token: "",
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetch("http://localhost:8000/api/currentUser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          let user = {
            name: data.name,
            type: data.is_admin,
            zdjecie: data.zdjecie,
            token: localStorage.getItem("token"),
          };
          setUser(user);
        });
    } else {
      const path = "/";
      navigate(path);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;

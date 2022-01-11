import React, { useState, useContext, createContext, useEffect } from "react";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState({ name: "", type: false, zdjecie: "" });

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
          };
          setUser(user);
        });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
export default UserContextProvider;

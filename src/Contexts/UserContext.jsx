import { createContext, useContext, useState } from "react";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = sessionStorage.getItem("username");
    return savedUser ? { username: savedUser } : null;
  });

  function login(username) {
    const user = { username };
    setUser(user);
    sessionStorage.setItem("username", username);
  }

  function logout() {
    setUser(null);
    sessionStorage.removeItem("username");
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

import React, { useEffect, useState } from "react";

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    if (localStorage.getItem('users')) {
      setUsers(JSON.parse(localStorage.getItem('users')))
    }
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <GlobalContext.Provider value={{
      users,
      setUsers,
      getUsers,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext;
export { GlobalProvider };
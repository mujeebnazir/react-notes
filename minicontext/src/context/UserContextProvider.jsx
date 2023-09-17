import React from "react";
import UserContext from "./UserContext";

// Step 2: wrap the component tree/ App with the contextProvider
const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

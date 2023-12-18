
import { createContext, useContext, useState } from "react";
const UserContext = createContext(undefined);
export const UserProvider = ({ children }) => {
  
  const [users ,setUsers] = useState(
    {
      name: 'ImadNajam',
      age: 19,
      email: 'imad00naj0@gmail.com',
      Num: '0657997732'
    }
  );
  const user2={
    name: 'anass',
    age: 17,
    email: 'anass2007@gmail.com',
    Num: '0000000000'
  };


  return(
  <>
  <UserContext.Provider value={{ users }}>
    {children}
  <button onClick={()=>setUsers(user2)}> change the user </button> 
  </UserContext.Provider>;
  </> )
};
export const useUsers = () => useContext(UserContext);

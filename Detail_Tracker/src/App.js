import React, { useState } from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';


function App() {

  const [userList,setUserList] = useState([]);
  
  const AddUserHandler = (uName,uAge)=>{
    setUserList( (previousState) =>{
      return [...previousState,{name:uName , age: uAge}];
    })
  }

  return (
    <div>
      <AddUser onAddUser ={AddUserHandler}/>
      <UsersList users={userList}/>
    </div>
  );
  
}

export default App;

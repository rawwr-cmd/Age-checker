import React, { useState, Fragment } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UserList";
import { v4 as uuidv } from "uuid";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      //we create a new java script object for every users and
      //adding that to our usersList array
      return [...prevUsersList, { name: uName, age: uAge, id: uuidv() }];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Friend from "./../Friend";

const Friends = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>User: {users.length} </h2>
      {
        users.map( user => <Friend
        user={user}
        ></Friend>)
      }
    </div>
  );
};

export default Friends;

import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import User from "../../user/User";

const Users = () => {
//   const { photoUsers, setPhotoUsers } = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/photos")
//       .then((res) => res.json())
//       .then((data) => setPhotoUsers(data));
//   }, []);
  return (
    <div>
        <h2>This is users interface </h2>
        {/* <h3>User: {photoUsers.length}</h3> */}
      {/* {
          photoUsers.map(photoUser=> <User photoUser={photoUser}></User>)
      } */}
    </div>
  );
};

export default Users;

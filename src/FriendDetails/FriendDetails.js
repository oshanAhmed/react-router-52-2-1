import React from "react";
import { useHistory, useParams } from "react-router";
import { useEffect, useState } from "react/cjs/react.development";

const FriendDetails = () => {
  const history = useHistory();
  let { id } = useParams();
  const [friendId, setFriendId] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setFriendId(data));
  }, []);
  const handleClick = () => {
    history.push("/friends");
  };

  return (
    <div>
      <h2>Friend Details {id}</h2>
      <h1>User Name: {friendId.name} </h1>
      <h3>Phone : {friendId.phone} </h3>
      <h3>Website : {friendId.website} </h3>
      <h3>Company : {friendId.company?.name} </h3>
      <h3>Address : {friendId.address?.street} </h3>
      <h3>City : {friendId.address?.city} </h3>
      <h3>Zipcode : {friendId.address?.zipcode} </h3>

      <button onClick={handleClick}>See All Friends</button>
    </div>
  );
};

export default FriendDetails;

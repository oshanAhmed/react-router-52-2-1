import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Friend.css";

const Friend = (props) => {
  const { id, name, email, username } = props.user;
  const history = useHistory();
  const ID = `/friend/${id}`;

  const handleFriendClick = () => {
    history.push(`/friend/${id}`)
  };
  return (
    <div className="friend">
      <h2>User:{username}</h2>
      <h2>Name:{name}</h2>
      <h2>Email:{email}</h2>
      <p>Please Visit:{id} </p>
      <Link to={ID}>Visite Me</Link>
      <br />
      <Link to={ID}>
        <button>visit 2</button>
      </Link>
      <br />
      {/* use this  */}
      <button onClick={handleFriendClick}>Visit 3</button>
    </div>
  );
};

export default Friend;

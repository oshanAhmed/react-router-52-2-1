import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-nav">
      <NavLink
        className="navLink"
        to="/home"
        style={(isActive) => ({
          color: isActive ? "red" : "white",
        })}
      >
        HOME
      </NavLink>
      <NavLink
        className="navLink"
        to="/topics"
        style={(isActive) => ({
          color: isActive ? "red" : "white",
        })}
      >
        TOPICS
      </NavLink>
      <NavLink
        className="navLink"
        to="/users"
        style={(isActive) => ({
          color: isActive ? "red" : "white",
        })}
      >
        USERS
      </NavLink>
      <NavLink
        className="navLink"
        to="/friends"
        style={(isActive) => ({
          color: isActive ? "red" : "white",
        })}
      >
        FRIENDS
      </NavLink>
      <NavLink
        className="navLink"
        to="/notFound"
        style={(isActive) => ({
          color: isActive ? "red" : "white",
        })}
      >
        NOTFOUND
      </NavLink>
    </div>
  );
};

export default Header;

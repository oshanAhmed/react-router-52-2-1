import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <div className="header-nav">
      <NavLink className="navLink"
        to="/home"
        style={(isActive) => ({
          color: isActive ? "red" : "white",
        })}
      >
        Home
      </NavLink>
      <NavLink className="navLink"
        to="/topics"
        style={(isActive) => ({
          color: isActive ? "red" : "white",
        })}
      >
        Topics
      </NavLink>
      <NavLink className="navLink"
        to="/users"
        style={(isActive) => ({
          color: isActive ? "red" : "white",
        })}
      >
        Users
      </NavLink>
      <NavLink className="navLink"
        to="/friends"
        style={(isActive) => ({
          color: isActive ? "red" : "white",
        })}
      >
        Friends
      </NavLink>
      <NavLink className="navLink"
        to="/notFound"
        style={(isActive) => ({
          color: isActive ? "red" : "white",
        })}
      >
        NotFound
      </NavLink>
    </div>
  );
};

export default Header;

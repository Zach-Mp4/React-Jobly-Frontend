import React from "react";
import "./NavBar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar({user, setUser}) {
  const navigate = useNavigate();

  function handleLogout(){
    setUser([]);
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Jobly
        </NavLink>

        <Nav className="ml-auto" navbar>
        {user.length !== 0 ? (
          <NavItem>
            <NavLink to="/profile">{user.username}</NavLink>
          </NavItem>
      ) : null}
          <NavItem>
            <NavLink to="/companies">Companies</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/jobs">Jobs</NavLink>
          </NavItem>
          {user.length === 0 ? (
          <NavItem>
            <NavLink to="/register">Register</NavLink>
          </NavItem>
      ) : 
      <NavItem>
      <NavLink onClick={handleLogout}>Logout</NavLink>
    </NavItem>
      }
      {user.length === 0 ? (
          <NavItem>
            <NavLink to="/login">Login</NavLink>
          </NavItem>
      ) : null}
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;

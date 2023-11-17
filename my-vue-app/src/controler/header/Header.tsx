import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  let [check, setCheck] = useState<string>("");
  useEffect(() => {
    function authentication() {
      let value = localStorage.getItem("check");
      if (value) {
        setCheck(value);
      }
    }
    authentication();
  }, []);

  function handleLogout() {
    localStorage.removeItem("check");
    setCheck("");
    location.replace("/");
  }

  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <Link to={"/"}>
            <p className='navbar-brand'>Home</p>
          </Link>

          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              {check ? (
                <li className='nav-item'>
                  <p onClick={handleLogout} className='navbar-brand'>
                    Logout
                  </p>
                </li>
              ) : (
                <li className='nav-item'>
                  <Link to={"/login"}>
                    <p className='navbar-brand'>Login</p>
                  </Link>
                </li>
              )}
              {check ? (
                <li className='nav-item'>
                  <Link to={"/profile"}>
                    <p className='navbar-brand'>Profile</p>
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
            <form className='d-flex' role='search'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button className='btn btn-outline-success' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

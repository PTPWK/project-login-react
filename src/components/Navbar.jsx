import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import { auth } from '../libs/firebase';

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === '/' ? 'active' : ''} kanit`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === '/dashboard' ? 'active' : ''} kanit-thin`} 
                to="/dashboard" 
              >
                Dashboard 
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === '/logout' ? 'active' : ''} kanit`}
                onClick={handleLogout}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

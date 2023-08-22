import Logo from "../../assets/image/BeSmart.png";
import React from "react";
import { BsBellFill, BsFillEnvelopeFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <section>
      <nav className="navbar pe-3 ps-3 navbar-expand-lg navbar-light bg-light bg-white py-40">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} width="60" height="60" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto text-lg gap-lg-0 gap-2">
              <NavLink
                to="/"
                exact
                className="nav-item nav-link my-auto"
                activeClassName="active"
              >
                Home
              </NavLink>
              <NavLink
                to="/service"
                className="nav-item nav-link my-auto"
                activeClassName="active"
              >
                Service
              </NavLink>
              <NavLink
                to="/product"
                className="nav-item nav-link my-auto"
                activeClassName="active"
              >
                Product
              </NavLink>
              <NavLink
                to="/blog"
                className="nav-item nav-link my-auto"
                activeClassName="active"
              >
                Blog
              </NavLink>
            </ul>
            <ul className="navbar-nav">
              <div className="nav-item my-auto dropdown d-flex">
                <div className="vertical-line d-lg-block d-none"></div>
                <div>
                  <a
                    className="dropdown-toggle text-decoration-none text-black me-lg-35"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Hello
                  </a>

                  <ul
                    className="dropdown-menu border-0"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <a
                        className="dropdown-item text-lg color-palette-2"
                        href="#"
                      >
                        My Profile
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-lg color-palette-2"
                        href="#"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item text-lg color-palette-2"
                        href="#"
                        onClick={""}
                      >
                        Log Out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <li className="nav-item">
                <BsFillEnvelopeFill className="icon-1" />
              </li>
              <li className="nav-item ms-4">
                <BsBellFill className="icon-2" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;

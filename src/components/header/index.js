import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="row nav-row">
      <div className="container header-container">
        <div className="row">
          <div className="col-12 col-md-4 name text-center">
            <span className="name">
              <h1>Avery E. Rouser</h1>
            </span>
          </div>
          <div className="col-12 col-md-8 pt-1 pr-md-0">
            <ul className="nav float-none float-md-right justify-content-center">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/projects">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link pr-0" href="/contacts">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

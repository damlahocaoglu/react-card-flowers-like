import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://react-kfndyt.stackblitz.io">
            Damla
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                Anasayfa
              </a>
              <a className="nav-link" href="#">
                Hakkımızda
              </a>
              <a className="nav-link" href="#">
                İletişim
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;

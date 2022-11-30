import React from "react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navigation({ currentPage, handlePageChange }) {
  return (
    <div>
      <header className="display-flex justify-space-between align-center p-2">
        <span>
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand">Safa zgolli</a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mr-auto">
                {/* <li className="nav-item">
                  <a
                    href="#home"
                    onClick={() => handlePageChange("aboutMe")}
                    // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                    // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                    className={
                      currentPage === "Home" ? "nav-link active" : "nav-link"
                    }
                  >
                    Home
                  </a>
                </li> */}
                <li className="nav-item">
                  <a
                    href="#about"
                    onClick={() => handlePageChange("aboutMe")}
                    // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={
                      currentPage === "aboutMe" ? "nav-link active" : "nav-link"
                    }
                  >
                    About me
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#portfolio"
                    onClick={() => handlePageChange("portfolio")}
                    // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={
                      currentPage === "portfolio"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Protfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#resume"
                    onClick={() => handlePageChange("resume")}
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={
                      currentPage === "resume" ? "nav-link active" : "nav-link"
                    }
                  >
                    Resume
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#contact"
                    onClick={() => handlePageChange("Contact")}
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={
                      currentPage === "Contact" ? "nav-link active" : "nav-link"
                    }
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </span>
      </header>
    </div>
  );
}

export default Navigation;

import React from "react"
import PropTypes from "prop-types"

export default function Navbar(props) {
  const handleToggle = () => {
    // Toggle the mode and call the toggleMode function from props
    props.toggleMode()
  }
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/TextForm"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/About">
                  {props.aboutText}
                </a>
              </li>
            </ul>
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={handleToggle}
                checked={props.mode === "dark"}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable {props.mode === "light" ? "Dark" : "Light"}Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.prototype = {title: PropTypes.string, aboutTsxt: PropTypes.string}
// Navbar.defaultProps = {
//   title: "Title from defaultProps",
//   aboutText: "About text from defaultProps",
// }

import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  const [isShown, setIsShown] = useState(false);
  return (
    <>
      <header>
        <div className="logo">IBUsers</div>
        <button
          onClick={() => (!isShown ? setIsShown(true) : setIsShown(false))}
          aria-label={!isShown ? "open menu" : "close menu"}
          aria-expanded={isShown}
          className={`btn ${!isShown ? "open" : "close"}`}
        ></button>
        <nav data-visible={isShown} className={`${!isShown ? "hide" : "show"}`}>
          <ul>
            <li className="nav-link">
              <NavLink to="/" className="link" end>
                home
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/users" className="link">
                users
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/random" className="link">
                generate
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/contact" className="link">
                contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
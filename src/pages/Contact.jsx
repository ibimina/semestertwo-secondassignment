import React from "react";
import { NavLink } from "react-router-dom";
import { Footer, NavBar } from "../components";
import { Outlet } from "react-router-dom";
export default function Contact() {
  return (
    <>
      <NavBar />
      <div className="developer">
        <div className="dev-block">
          <p className="sub-sect">List of users</p>
          <p>
            Content consumed data from{" "}
            <a
              href="https://randomuser.me"
              target="_blank"
              rel="noreferrer"
              className="yellow"
            >
              Randomuser.me
            </a>
          </p>

          <div className="social">
            <NavLink to="fact" className="more-users yellow">
              fact
            </NavLink>
            <NavLink to="dev" className="more-users yellow">
              contact
            </NavLink>
          </div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

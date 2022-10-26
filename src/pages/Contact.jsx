import React from "react";
import { Link } from "react-router-dom";
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
            <a href="https://randomuser.me" target="_blank" rel="noreferrer">
              random user api
            </a>
          </p>

          <div className="social">
            <Link to="fact" className="more-users">
              fact
            </Link>
            <Link to="dev" className="more-users">
              contact
            </Link>
          </div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

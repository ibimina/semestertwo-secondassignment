import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Footer, NavBar } from "../components";
import BrowserMap from "../components/BrowserMap";

import "./user.css";
export default function User() {
  const location = useLocation();
  const { user } = location.state;
  const navi = useNavigate();

  return (
    <>
      <NavBar />
      <div className="user-container">
        {user && (
          <div key={user.login.uuid} className="wrap">
            <div>
              <div className="details-sec">
                <img
                  src={user.picture.medium}
                  alt={`${user.name.first}${user.name.last}`}
                  className="cardimg"
                />
                <div>
                  <p className="">
                    <span>{user.name.first} </span>
                    <span> {user.name.last} </span>
                  </p>

                  <div className="flex">
                    {" "}
                    <img
                      src={"../assets/icons8-phone.svg"}
                      alt="zip code icon"
                      className="img-icon"
                    />{" "}
                    <span>{user.phone}</span>
                  </div>
                  <div className="flex">
                    {" "}
                    <img
                      src={"../assets/icons8-city-buildings.svg"}
                      alt="city icon"
                      className="img-icon"
                    />{" "}
                    <span>{user.location.city},</span>
                    <span>{user.location.country} </span>
                  </div>
                </div>
              </div>
              <div className="full-details">
                <p>{user.dob.age} years old</p>
                <div className="flex">
                  {" "}
                  <img
                    src={"../assets/icons8-gender.svg"}
                    alt="gender icon"
                    className="img-icon"
                  />
                  <span>{user.gender}</span>
                </div>

                <div className="flex">
                  {" "}
                  <img
                    src={"../assets/icons8-user.svg"}
                    alt="user icon"
                    className="img-icon"
                  />{" "}
                  @{user.login.username}
                </div>

                <div className="flex">
                  {" "}
                  <img
                    src={"../assets/icons8-zip-code.svg"}
                    alt="zip code icon"
                    className="img-icon"
                  />{" "}
                  {user.location.postcode}
                </div>
              </div>
              <div className="flex">
                {" "}
                <img
                  src={"../assets/icons8-circled-envelope.svg"}
                  alt="email icon"
                  className="img-icon mail"
                />{" "}
                <span>{user.email}</span>
              </div>
            </div>

            <BrowserMap location={user.location} />
          </div>
        )}
      </div>
      <div className="back">
        <button
          onClick={() => navi(-1)}
          aria-label="go back"
          className="btn arrow"
        ></button>
        <span className="text">go back</span>
      </div>
      <Footer/>
    </>
  );
}

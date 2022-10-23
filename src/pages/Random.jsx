import React, { useEffect } from "react";
import { NavBar } from "../components";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import "./random.css"
export default function Random() {
  const [randomPage, setRandomPage] = useState(3);
  const url = `https://randomuser.me/api/`;

  const { loading, users, fetchData } = useFetch(url);
  const handleRan = () => {
    fetchData();

  };

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="contents">
          {loading && <p className="loading">loading</p>}
          {users &&
            users.map((user) => (
              <div key={user.login.uuid} className="random user">
                <img
                  src={user.picture.medium}
                  alt={`${user.name.first}${user.name.last}`}
                  className="cardimg"
                />
                <div className="details">
                  <p className="name space-btm">
                    <span>{user.name.first} </span>
                    <span> {user.name.last} </span>
                  </p>
                  <p className="space-btm">{user.dob.age} years old</p>
                  <div className="location">
                    <img
                      src={"../assets/icons8-location.svg"}
                      alt="location icon"
                    />
                    <p>
                      <span>{user.location.city},</span>{" "}
                      <span>{user.location.country} </span>
                    </p>
                  </div>
                  <Link to={`/user/${user.cell}`} state={{ user }}>
                    more info
                  </Link>
                </div>
              </div>
            ))}
          <button onClick={handleRan} className="gen">
            generate user
          </button>
        </div>
      </div>
    </>
  );
}

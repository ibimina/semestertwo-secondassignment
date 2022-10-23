import React from "react";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
export default function Male() {
  const [page, setPage] = useState(1);
  const url = `https://randomuser.me/api/?results=12&gender=male&page=${page}`;
  const { loading, users } = useFetch(url);
  return (
    <div>
      {loading && <>loading</>}
      <ul className="users">
        {users &&
          users.map((user) => (
            <li key={user.login.uuid} className="user">
              <img
                src={user.picture.medium}
                alt={`${user.name.first}${user.name.last}`}
                className="cardimg"
              />
              <div className="details">
                <div className="name space-btm">
                  <p>
                    {" "}
                    <span>{user.name.first} </span>
                    <span> {user.name.last} </span>
                  </p>
                </div>
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
                  More Info
                </Link>
              </div>
            </li>
          ))}
      </ul>
      <div className="btt">
        <button
          disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          prev
        </button>
        <button
          disabled={page >= 50}
          onClick={() => setPage((prev) => prev + 1)}
        >
          next
        </button>
      </div>
    </div>
  );
}

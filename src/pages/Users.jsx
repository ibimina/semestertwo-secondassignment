import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavBar } from "../components";
import Footer from "../components/Footer";
import useFetch from "../hooks/useFetch";

import "./users.css";
const natt = [
  "AU",
  "BR",
  "CA",
  "CH",
  "DE",
  "DK",
  "ES",
  "FI",
  "FR",
  "GB",
  "IE",
  "IN",
  "IR",
  "MX",
  "NL",
  "NO",
  "NZ",
  "RS",
  "TR",
  "UA",
  "US",
];
export default function Users() {
  const numberOfPages = 50;
  const [nat, setNat] = useState([]);
  const [s, setS] = useState(false);
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(1);

  let url = `https://randomuser.me/api/?page=${page}&results=12&seed=abc`;

  const { loading, users, filterNat, filterGen } = useFetch(url);
  const na = useNavigate();
  const handleCheck = (e) => {
    setNat((prev) => [...prev, e.target.value]);
  };

  const handleReset = () => {
    setNat([]);
    document.querySelector("form").reset();
  };

  const handleGender = (e) => {
    e.preventDefault();
    if (e.target.value !== "") {
      filterGen(e.target.value);
    }
   
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(false);
    filterNat(nat, users);
    document.querySelector("form").reset();
  };
  useEffect(() => {
    if (users === "") {
      na("/nobuddy");
    }
  }, [users]);
 
  return (
    <>
      <NavBar />

      <div className="user-wrap">
        <div className="nat-wrap">
          <div className="flex">
            <div
              className="arrowdown"
              onClick={() => (!show ? setShow(true) : setShow(false))}
            >
              <span>Country</span>
              <img
                src="/assets/icon-next.svg"
                alt="arrow down icon"
                className={`${!show ? "down" : "up"}`}
              />
            </div>
            <select
              defaultValue="null"
              onClick={() => setShow(false)}
              onChange={handleGender}
              className="arrowdown space"
            >
              <option value="null" hidden>
                Gender
              </option>
              <option value="female">female</option>
              <option value="male">male</option>
            </select>
          </div>

          <form
            className={`ff ${!show ? "hide" : "show"}`}
            onSubmit={handleSubmit}
            onReset={handleReset}
          >
            <div className="col">
              {natt.map((nat) => (
                <label key={nat} className="checkwrap" onClick={handleCheck}>
                  <input type="checkbox" value={nat} />
                  <span>{nat}</span>
                </label>
              ))}
            </div>
            <div className="flex ma-top">
              <input type="submit" value="submit" className="submit" />
              <input type="reset" value="reset" className="submit" />
            </div>
          </form>
        </div>
        {loading && <p className="loading">loading</p>}
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
                  <div className="location space-btm">
                    <img
                      src={"../assets/icons8-location.svg"}
                      alt="location icon"
                    />
                    <p>
                      <span>{user.location.city},</span>{" "}
                      <span>{user.location.country} </span>
                    </p>
                  </div>
                  <Link
                    to={`/user/${user.cell}`}
                    state={{ page, user }}
                    className="user-link"
                  >
                    <span> More info</span>
                  </Link>
                </div>
              </li>
            ))}
        </ul>

        <div className="bttns">
          <button
            disabled={page <= 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            prev
          </button>
          {Array.from(
            { length: numberOfPages },
            (value, index) => index + 1
          ).map((index) => (
            <button key={index} onClick={() => setPage(index)}>
              {index}
            </button>
          ))}
          <button
            disabled={page >= 50}
            onClick={() => setPage((prev) => prev + 1)}
          >
            next
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

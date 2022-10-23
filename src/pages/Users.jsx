import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { NavBar } from "../components";
import useFetch from "../hooks/useFetch";
import "./users.css";
export default function Users() {
  const numberOfPages = 50;
  const [page, setPage] = useState(1);
  const[result,setResult]=useState(12)
  const url = `https://randomuser.me/api/?page=${page}&results=${result}&seed=abc`;

  const { loading, users } = useFetch(url);

  return (
    <>
      <NavBar />
      <div className="user-wrap">
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
                    {/* <img
                      src="../assets/icons8-user.svg"
                      alt="user icon"
                      className="img-icon"
                    /> */}
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
                    {/* <img
                      src={"../assets/icons8-information.svg"}
                      alt="location icon"
                      className="img-icon"
                    /> */}
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
        <div className="flex">
          <Link to="female" className="more-users">
            see female users
          </Link>
          <Link to="male" className="more-users">
            see male users
          </Link>
        </div>
        <Outlet />
      </div>
    </>
  );
}

import { Outlet } from "react-router-dom";
import { NavBar } from "../components";

export default function Users() {
  return (
    <div>
      <NavBar/>
      Users
      <Outlet/>
      </div>
  )
}

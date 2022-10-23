import { Route, Routes } from "react-router-dom";
import Redirect from "../components/Redirect";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Female from "../pages/Female";
import Male from "../pages/Male";
import User from "../pages/User";
import Users from "../pages/Users";

function ProjectRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />}>
          <Route path="female" element={<Female />} />
          <Route path="male" element={<Male />} />
        </Route>
        <Route path="/user/:id" element={<User />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Redirect />} />
      </Routes>
    </>
  );
}

export default ProjectRoute;

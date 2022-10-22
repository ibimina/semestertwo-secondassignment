import { Route, Routes } from "react-router-dom";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import More from "../pages/More";
import Random from "../pages/Random";
import User from "../pages/User";
import Users from "../pages/Users";

function ProjectRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />}>
          <Route path="more" element={<More />} />
        </Route>
        <Route path="/user:id" element={<User />} />
        <Route path="random" element={<Random />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default ProjectRoute;

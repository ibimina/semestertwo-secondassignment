import { Route, Routes } from "react-router-dom";
import Redirect from "../pages/Redirect";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Faq from "../pages/Faq";
import Social from "../pages/Social";
import User from "../pages/User";
import Users from "../pages/Users";
import Nouser from "../pages/Nouser";

function ProjectRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />}></Route>
        <Route path="/user/:id" element={<User />} />
        <Route path="contact" element={<Contact />}>
          <Route path="fact" element={<Faq />} />
          <Route path="dev" element={<Social />} />
        </Route>
        <Route path='nobuddy' element={<Nouser />} />
        <Route path="*" element={<Redirect />} />
      </Routes>
    </>
  );
}

export default ProjectRoute;

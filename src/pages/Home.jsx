import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../components";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <NavBar />
      <div className="home">
        <div className="text-sect">
          <p className="hd"> IBuddy a Community for Developer</p>
          <p className="connect">Come together</p>
          <p className="find">
            Find a tech buddy in your community to connect and collaborate
          </p>
          <Link to="/users" className="connect-btn">
            connect now
          </Link>
        </div>
      </div>

      <div className="ssb">
        <div className="sub-sect">
          <h2>find your tech buddy and grow up your skill</h2>
          <img
            src="https://media.istockphoto.com/photos/portrait-of-young-latin-marketing-specialist-in-glasses-working-on-picture-id1346563227?k=20&m=1346563227&s=612x612&w=0&h=xWsNFOIL2y079QsfrZb8H9Y7wCXKj9niswUnZpERokI="
            alt=""
            className="afro"
          />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum nihil
            recusandae debitis temporibus fuga voluptatem odit quas corrupti
            quibusdam, eum ipsam perspiciatis cumque, eaque accusantium
            assumenda itaque ut repudiandae fugiat.
          </p>
        </div>
        <div className="sub-sect">
          <h2>Share your experience with your buddy and learn more</h2>
          <img
            src="./assets/dvg.jpg"
            alt="coders discussing about source code compiling discovers errors asks rest team explanations front multiple screens running algorithms software developers doing teamwork"
            className="dvg"
          />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum nihil
            recusandae debitis temporibus fuga voluptatem odit quas corrupti
            quibusdam, eum ipsam perspiciatis cumque, eaque accusantium
            assumenda itaque ut repudiandae fugiat.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

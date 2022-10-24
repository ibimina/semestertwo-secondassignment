import React from "react";
import { NavBar } from "../components";
export default function Home() {
  return (
    <>
      <NavBar />
      <div className="developer">
        <div className="dev-block">
          <p>Meet Tech buddy</p>
          <img src="./assets/afro.png" alt="" className="techbaddie" />
          <p>console log</p>
          <img src="./assets/laptop.png" alt="" />
          <img src="./assets/java.png" alt="" />
          <div className="card-portrait">
            <img src="./assets/image 4.png" alt="" />
            <p>console log</p>
            <p>say hello</p>
          </div>
          <div className="card-landscape">
            <img src="./assets/image 10.pngg" alt="" />
            <p className="max"></p>
            <p className="max"></p>
            <p className="half"></p>
          </div>
        </div>
      </div>
    </>
  );
}

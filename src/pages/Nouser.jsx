import React from 'react'
import { Link } from 'react-router-dom';
import { NavBar } from '../components';
import Footer from '../components/Footer';
export default function () {
  return (
    <><NavBar/>
      <div className="redirect nouser">
        <div>
          <p> No tech buddy found</p>
          <Link to="/users">go back</Link>
        </div>
      </div>
      <Footer/>
    </>
  );
}

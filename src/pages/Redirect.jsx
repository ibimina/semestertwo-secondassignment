import React from 'react'
import { Link } from 'react-router-dom'

export default function Redirect() {
  return (
    <div className="redirect">
      <div>
        <p>Are you lost?</p>
        <Link to="/">go home</Link>
      </div>
    </div>
  );
}

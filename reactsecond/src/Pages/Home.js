import React from 'react';
import {Link } from "react-router-dom";
// App.js
export default function Home() {
    return (
      <>
        <main>
          <h2>Welcome to the homepage!</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        <nav>
          <Link to="/Dashboard">Dashboard</Link>
        </nav>
      </>
    );
  }
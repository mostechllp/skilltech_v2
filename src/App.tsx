import React from 'react';
import { Home } from './pages/Home';
export function App() {
  // return <Home />;
   return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1>🚧 Under Maintenance</h1>
      <p>We're updating our website. Please visit again soon.</p>
    </div>
  );
}
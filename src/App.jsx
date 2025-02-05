import { useState } from "react";

import "./style.css";

function App() {
  return (
    <>
      <Header />
    </>
  );
}

function Header() {
  const appTitle = "Tiệm Nhà Bên Shop";

  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Tiem Nha Ben" />
        <h1>{appTitle}</h1>
      </div>
    </header>
  );
}

export default App;

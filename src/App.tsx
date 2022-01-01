import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile"

function App() {
  return (
    <div className="App">
        <header className="header">
            <Header />
        </header>

      <main className="main__wrap">
        <div className="sidebar__left">
            <Navbar />
        </div>
        <div className="content__block">
            <Profile />
        </div>

      </main>
      <footer className="footer">
          Footer</footer>
    </div>
  );
}

export default App;

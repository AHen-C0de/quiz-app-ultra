import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import HomePage from "./pages/HomePage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import AddPage from "./pages/AddPage.jsx";
import BookmarkPage from "./pages/BookmarkPage";
import { cards } from "./db.js";

function App() {
  const [currentPage, setCurrPage] = useState("home");

  function changePage(page) {
    if (currentPage === page) {
      return;
    }
    setCurrPage(page);
  }

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <Routes>
          <Route path="/" element={<HomePage cards={cards} />} />
          <Route
            path="/bookmarks"
            element={
              <BookmarkPage
                cards={cards.filter((card) => card.bookmarked)} // show only bookmarked cards on that page
              />
            }
          />
          <Route path="/add" element={<AddPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
      <Navigation />
    </div>
  );
}

export default App;

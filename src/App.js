import "./App.css";
import { useState } from "react";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Cards from "./pages/cards/Cards.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Add from "./pages/add/Add.jsx";
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
        <ul className="content-wrapper">
          {currentPage === "home" && <Cards cards={cards} />}
          {currentPage === "bookmarks" && (
            <Cards cards={cards.filter((card) => card.bookmarked)} />
          )}
          {currentPage === "add" && <Add />}
          {currentPage === "profile" && <Profile />}
        </ul>
      </main>
      <Navigation currPage={currentPage} changePage={changePage} />
    </div>
  );
}

export default App;

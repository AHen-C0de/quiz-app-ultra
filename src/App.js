import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import CardsPage from "./pages/CardsPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import AddPage from "./pages/AddPage.jsx";
import { cardsDB } from "./db.js";

function App() {
  const [cards, setCards] = useState(cardsDB);
  console.log(cards);

  function deleteCard(id) {}

  return (
    <AppContainer>
      <Header />
      <AppMain>
        <Routes>
          <Route path="/" element={<CardsPage cards={cards} />} />
          <Route
            path="/bookmarks"
            element={
              <CardsPage
                cards={cards.filter((card) => card.bookmarked)} // show only bookmarked cards on that page
              />
            }
          />
          <Route path="/add" element={<AddPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </AppMain>
      <Navigation />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  text-align: center;
  background-color: var(--color-background);
  display: grid;
  grid-template-rows: repeat(3, auto);
  height: 100vh;
`;

const AppMain = styled.main`
  overflow-y: auto;
`;

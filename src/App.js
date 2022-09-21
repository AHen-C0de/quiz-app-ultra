import "./App.css";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Card from "./components/card/Card";
import { cards } from "./components/db.js";

function App() {
  console.clear();

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <div className="content-wrapper">
          {cards.map(({ id, question, answer, tags }) => (
            <Card key={id} question={question} answer={answer} tags={tags} />
          ))}
        </div>
      </main>
      <Navigation />
    </div>
  );
}

export default App;

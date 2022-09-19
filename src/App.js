import "./App.css";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Card from "./components/card/Card";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <Card />
        <Card />
        <Card />
      </main>
      <Navigation />
    </div>
  );
}

export default App;

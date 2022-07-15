import React from "react";
import Home from "./components/Home";
import Books from "./components/Books";
import NavBar from "./components/navigation/NavBar";

function App() {
  const human = {
    id: 25,
    name: "Kat",
    age: 33,
  };

  return (
    <div>
      <NavBar />
      <Home />
      <Books person={human} />
    </div>
  );
}

export default App;

import React, { useState, createContext } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

const AppState = createContext();
function App() {
  const [data, setData] = useState("Cherry Byte Technology");
  return (
    <div>
      <AppState.Provider value={data}>
        <Header />
        <Hero />
      </AppState.Provider>
    </div>
  );
}

export default App;
export { AppState };

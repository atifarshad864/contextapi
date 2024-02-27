import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState("Cherry Byte Technology");
  return (
    <div>
      <Header data={data} />
    </div>
  );
}

export default App;

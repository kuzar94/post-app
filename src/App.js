import React from "react";
import NavBar from "./components/NavBar";
import Table from "./components/Table";
import "./App.css";
import ReduxDemo from "./ReduxDemo";
function App() {
  return (
    <div>
      <NavBar />
      <ReduxDemo />
      <Table />
    </div>
  );
}

export default App;

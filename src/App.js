import React from "react";
import NavBar from "./components/NavBar";
import Table from "./components/Table";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <NavBar />
        <Table />
      </div>
    </Provider>
  );
}

export default App;

import React, { Component } from "react";
import { createStore } from "redux";

export default class ReduxDemo extends Component {
  render() {
    //ste2
    const reducer = function(state, action) {
      if (action.type === "Attack") {
        return action.payload;
      }
      return state;
    };
    //step1
    const store = createStore(reducer, "Peace");
    //step3
    store.subscribe(() => {
      console.log("store is now", store.getState());
    });
    //step4
    store.dispatch({ type: "", payload: " " });
    store.dispatch({ type: "Attack", payload: "Iron Man" });
    return <div>TEST</div>;
  }
}

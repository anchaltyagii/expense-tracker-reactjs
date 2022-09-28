import React from "react";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem/ExpenseItem";
import InputItem from "./components/InputItem/InputItem";

const App = () => {
  return (
    <div className="App">
      <h2>Expenses</h2>
      <InputItem />
      <ExpenseItem />
    </div>
  );
};

export default App;

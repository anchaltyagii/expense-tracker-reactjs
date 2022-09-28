import React, { useState } from "react";
import axios from "axios";
import "./InputItem.css";

const InputItem = () => {
  const [title, setTitle] = useState(null);
  const [price, setPrice] = useState(null);
  const [date, setDate] = useState(null);

  const handleSubmit = () => {
    axios
      .post("http://localhost:5000/addExpenses", {
        title: title,
        price: price,
        date: date,
      })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
      setTitle("");
      setPrice("");
      setDate("");
      window.location.reload();
  };

  return (
    <div className="input-container">
      <form>
        <input
          type="text"
          placeholder="Enter Expense"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Price"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </form>
      <button onClick={handleSubmit}>Add Expense</button>
    </div>
  );
};

export default InputItem;

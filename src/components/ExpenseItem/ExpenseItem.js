import axios from "axios";
import React, { useEffect, useState } from "react";
import moment from "moment";
import "./ExpenseItem.css";

const ExpenseItem = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  var sum = 0;

  useEffect(() => {
    axios
      .get("http://localhost:5000/getExpenses")
      .then((res) => {
        const expenses = res.data;
        setData(expenses);
        expenses.map((item) => {
          sum = item.price + sum;
          setTotal(sum);
        })
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);
 
  return (
    <>
    <div><div className="total_expense">Total Expenses: <b>{total}</b></div></div>
    <div>
      {data.map((item) => (
        <div className="expense_container">
        <p>{item.title}</p>
        <p>{item.price}</p>
        <p>{moment(item.date).format("D MMM YYYY")}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default ExpenseItem;

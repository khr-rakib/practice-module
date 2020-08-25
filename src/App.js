import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import db from "./db";

import Navbar from "./Components/Navbar/Navbar";
import Users from "./Components/Users/Users";

function App() {
  const [users, setUsers] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setUsers(db);
  }, []);

  const addUser = (id) => {
    const filteredData = db.find((item) => item.id === id);
    setCart([...cart, filteredData]);
  };

  useEffect(() => {
    const results = db.filter(
      (user) =>
        user.first_name.includes(keyword) || user.last_name.includes(keyword)
    );
    setUsers(results);
  }, [keyword]);

  return (
    <div>
      <Navbar cart={cart} setKeyword={setKeyword} />
      <Users users={users} addUser={addUser} />
    </div>
  );
}

export default App;

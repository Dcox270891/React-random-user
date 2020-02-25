import React, { useState, useEffect } from "react";
import Main from "./pages/Index"
import Table from "./components/table"
import SearchBar from "./components/search"
import './App.css';
import api from "./utils/api";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState(``);
  
  const handleInputChange = event => {
    setSearch( event.target.value );
    console.log(search)
  };

  useEffect(() => {
      api.amountOfUsers(20)
          .then(res => { 
              setUsers( res.data.results );
          })
          .catch(err => console.log(err))
  }, []);

  return (
    <div className="App">
      <Main />
      <SearchBar users={users} search={search}/>
      <Table users={users} search={search} handleInputChange={handleInputChange}/>
    </div>
  );
}

export default App;

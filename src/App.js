import React, { useState, useEffect } from 'react';
import Shows from "./components/Shows";
import './App.css';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [records, setRecords] = useState([]);
  const [searchText, setSearchText] = useState("");

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setSearchText(lowerCase);
  };

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    // fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    // fetch("http://localhost:3000/posts")
    fetch("https://mocki.io/v1/d73ff4c7-4c42-4338-b6c9-f6d6144fcd8f")
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setRecords(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  });

  return (
    <div className="App">
      <header className="App-header">
        <div className="main"> 
          <h1>React Search</h1>
          <div className="search">
            <input placeholder="Enter Post Title" onChange={inputHandler}/>
          </div>
          <Shows records= {records} input={searchText} />
        </div>
      </header>
     
    </div>
  );
}

export default App;

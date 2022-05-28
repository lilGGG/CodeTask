import React, { useState, useEffect } from 'react';
import Shows from "./components/Shows";
import styled from "styled-components";
import './App.css';

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: chocolate;
`;

const SearchInput = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  color:gray;
  background: #e5e2e2;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: chocolate;
  }
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

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
    const url = `https://api.tvmaze.com/search/shows?q=${searchText}`
    fetch(url)
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
    // console.log("searchText", searchText)
    // console.log("records", records)
  }, [searchText]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="main"> 
          <Wrapper> 
            <Title> Search Tv Show </Title>
              <SearchInput  placeholder="Enter Tv Show Title" onChange={inputHandler} />
            <Shows records= {records} input={searchText} />
          </Wrapper>
        </div>
      </header>
     
    </div>
  );
}

export default App;

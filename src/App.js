import React, { useState, useEffect } from 'react';
// import Shows from "./components/Shows";
import MainTvShows from "./components/UI/organisms/MainTvShows/MainTvShows";
// import SearchInput from "./components/UI/atoms/SearchInput/SearchInput";
// import Label from "./components/UI/atoms/Label/Label";
// import Title from "./components/UI/atoms/Title/Title";
// import SearchItem from './components/UI/molecules/SearchItem/SearchItem';
import Header from "./components/UI/organisms/Header/Header";
// import { getShows } from "../api/DataService.js";
import { getShows } from "./api/DataService.js";
import styled from "styled-components";
import './App.css';

// const Title = styled.h1`
//   font-size: 2em;
//   text-align: center;
//   color: chocolate;
// `;

// const SearchInput = styled.input`
//   font-size: 18px;
//   padding: 10px;
//   margin: 10px;
//   color:gray;
//   background: #e5e2e2;
//   border: none;
//   border-radius: 3px;
//   ::placeholder {
//     color: chocolate;
//   }
// `;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// const Label = styled.label `
//   color: chocolate;
//   padding: 0 0 4px 10px;
//   line-height: 1.5;
//   display: block;
// `;

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
        async function fetchDataShows() {
          let show_result = await getShows(searchText);
          setRecords(show_result);
        }
        fetchDataShows();
      }, [searchText]);


  // useEffect(() => {
  //   const url = `https://api.tvmaze.com/search/shows?q=${searchText}`
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(
  //     (result) => {
  //       setIsLoaded(true);
  //       setRecords(result);
  //     },
  //     (error) => {
  //       setIsLoaded(true);
  //       setError(error);
  //     }
  //   )
  //   // console.log("searchText", searchText)
  //   // console.log("records", records)
  // }, [searchText]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="main"> 
          <Wrapper> 
              <Header title="Tv Show with Seasons and Episodes"  searchLabel ="Search Show TV" inputHandler={inputHandler}/>
              {/* <Title Text="Tv Show with Seasons and Episodes"> </Title>
              <SearchItem text="Search Show TV" inputHandler={inputHandler} /> */}

              {/* <Label Text="Search Show TV"/>
              <SearchInput inputHandler={inputHandler} />  */}
              {/* <SearchInput  placeholder="Enter Tv Show Title" onChange={inputHandler} /> */}
            {/* <Shows records= {records} input={searchText} /> */}
            <MainTvShows records= {records} input={searchText} />
          </Wrapper>
        </div>
      </header>
     
    </div>
  );
}

export default App;

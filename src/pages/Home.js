import React, { useState, useEffect } from 'react';
import MainTvShows from "../components/UI/organisms/MainTvShows/MainTvShows";
import Header from "../components/UI/organisms/Header/Header";
import { getShows } from "../api/DataService.js";
import styled from "styled-components";


const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

/**
 * Component in order to see a our application and create a single page application
 * @returns 
 */

function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [records, setRecords] = useState([]);
  const [searchText, setSearchText] = useState("");

  /**
   * Search text convert to lower leter
   * @param {e} e 
   */
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

  return (
    <div className="App">
      <header className="App-header">
        <div className="main"> 
          <Wrapper> 
              <Header title="Tv Show with Seasons and Episodes"  searchLabel ="Search Show TV" inputHandler={inputHandler}/>
              <MainTvShows records= {records} input={searchText} />
          </Wrapper>
        </div>
      </header>
     
    </div>
  );
}

export default Home;

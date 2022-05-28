import React,  { useState, useEffect } from 'react';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import {getEpisodes} from "../api/DataService.js";
import styled from "styled-components";


const EpisodesTitle = styled.h1`
  font-size: 1em;
  text-align: left;
  color: chocolate;
`;
const ListEpisodes = styled.ul`
  list-style-type: none;
`;

function Episodes(props) {

    const [episodes, setEpisodes] = useState({});
    // const [episodes1, setEpisodes1] = useState({});
    //  console.log("seasons componenti meej", props.seasons);
     
    //  let seasonSelected = (id) => {
    //      console.log("id",id);
    //     // var lowerCase = e.target.value.toLowerCase();
    //     // setSearchText(lowerCase);
    //   };

    useEffect(() => {
        async function fetchDataEpisodes() {
          let epis_result = await getEpisodes(props.seasonId);
          setEpisodes(epis_result);
        }
        fetchDataEpisodes();
        // setVisible(false);
      }, [props.seasonId]);
    
      console.log("episodes", episodes);

      const data = Array.from(episodes);

    //   const episFunc = (episodes) => {
    //     setEpisodes1(episodes);
    //   };

     
      
    return (
        <> 
         <ListEpisodes>
            <EpisodesTitle> Episodes </EpisodesTitle> 
           {data.map((epis) => (
                <> 
                <li> {epis.image? <a href={epis.url} target="_blank">  <img  src={epis.image.medium}  /> </a>: ""} </li>
                <li>  {epis.name}  </li>
                </>
            ))}
        </ListEpisodes>
        </>
    )
}

export default Episodes
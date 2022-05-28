import React,  { useState, useEffect } from 'react';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import {getEpisodes} from "../api/DataService.js";

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

         {/* I am episodes {props.seasonId}  */}
         {/* <a href={episodes[0].url}> {props.seasonId}  {episodes[0].name} </a> */}
         
         <ul>
            Episodes
           {data.map((epis) => (
                <> 
                {/* <li > {epis.name} </li> */}
                <li> {epis.image? <a href={epis.url} target="_blank">  <img  src={epis.image.medium}  /> </a>: ""} </li>
                <li>  {epis.name}  </li>
               
                </>
            ))}
        </ul>
         
    
        
      
        </>
    )
}

export default Episodes
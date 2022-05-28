import React,  { useState, useEffect } from 'react';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import Episodes from "./Episodes.js";
import styled from "styled-components";


const ListSeasons = styled.ul`
  list-style-type: none;
`;

function Seasons(props) {

     console.log("seasons componenti meej", props.seasons);
     
    //  let seasonSelected = (id) => {
    //      console.log("id",id);
    //   };
    
      const data = Array.from(props.seasons);
    
    return (
        <> 
        <ListSeasons>
           {data.map((season) => (
                <> 
                <li  key={season.id}> {season.image?  <div > 
                 <a href= {season.url} target="_blank"> <img  src={season.image.medium}  /></a>  </div>: ""} 
                </li> 
                <li>   Show Season  </li>
                <li> <Episodes seasonId={season.id}> </Episodes></li>
                </>
            ))}
        </ListSeasons>
        
      
        </>
    )
}

export default Seasons
import React,  { useState, useEffect } from 'react';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import Episodes from "./Episodes.js";

function Seasons(props) {

     console.log("seasons componenti meej", props.seasons);
     
     let seasonSelected = (id) => {
         console.log("id",id);
        // var lowerCase = e.target.value.toLowerCase();
        // setSearchText(lowerCase);
      };
    
      const data = Array.from(props.seasons);
    
    return (
        <> 
        {/* {props.seasons? props.seasons.map((season) => (
               <a href= {season.url}>  {season.url}</a>
                // <> 
                // <li  key={season.id}>    {season.url} </li>
                // </>
            )): ""} */}
        <ul>
      
           {data.map((season) => (
                <> 
                <li  key={season.id}> {season.image?  <div onClick={seasonSelected(season.id)}> <img  src={season.image.medium}  />  </div>: ""}  </li> 
                <li > {season.id} <a href= {season.url}>  Show Season </a>  </li>
                <li> <Episodes seasonId={season.id}> </Episodes></li>
                </>
            ))}
        </ul>
        
      
        </>
    )
}

export default Seasons
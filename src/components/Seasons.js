import React,  { useState, useEffect } from 'react';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

function Seasons(props) {

     console.log("seasons componenti meej", props.seasons);
  
    
    return (
        <> 
        {/* {props.seasons? props.seasons.map((season) => (
               <a href= {season.url}>  {season.url}</a>
                // <> 
                // <li  key={season.id}>    {season.url} </li>
                // </>
            )): ""} */}
        <ul>
           {props.seasons.map((season) => (
                <> 
                <li  key={season.id}>  <a href= {season.url}>  {season.url}</a>  </li>
                </>
                  
            ))}
        </ul>
      
        </>
    )
}

export default Seasons
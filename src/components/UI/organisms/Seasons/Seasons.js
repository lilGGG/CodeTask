import React,  { useState, useEffect } from 'react';
// import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
// import Episodes from "./UI/organisms/Episodes/Episodes";
import  EpisSeasonItem from '../../molecules/EpisSeasonItem/EpisSeasonItem';
import Episodes from "../../organisms/Episodes/Episodes";
import styled from "styled-components";


const ListSeasons = styled.ul`
  list-style-type: none;
`;

function Seasons(props) {
    //  console.log("seasons componenti meej", props.seasons);
      const data = Array.from(props.seasons);
      // console.log("seasons componenti meej", data);
    
    return (
        <> 
        <ListSeasons>
           {data.map((season) => (
                <> 
                {/* <li  key={season.id}> {season.image?  <div > 
                 <a href= {season.url} target="_blank"> <img  src={season.image.medium}  /></a>  </div>: ""} 
                </li>  */}
                {/* key={season.id} */}

                {/* <li> {season.image?   <a href= {season.url} target="_blank"> <img  src={season.image.medium}  /></a> : ""}  </li>  */}
                <EpisSeasonItem
                   id={season.id}
                   number={season.number}
                   itemName=""
                   srcImg = {season.image? season.image.medium: ""}
                   img = {season.image}
                   url={season.url} />
                <li> <Episodes seasonId={season.id}> </Episodes></li>
                </>
            ))}
        </ListSeasons>
        </>
    )
}

export default Seasons
import React,  { useState, useEffect } from 'react';
import "react-table-6/react-table.css";
import  EpisSeasonItem from '../../molecules/EpisSeasonItem/EpisSeasonItem';
import Episodes from "../../organisms/Episodes/Episodes";
import styled from "styled-components";

const ListSeasons = styled.ul`
  list-style-type: none;
`;

/**
 * Component give a season list for specific show
 * @param {object} props seasons
 * @returns seasons list
 */
function Seasons(props) {
      const data = Array.from(props.seasons);
    return (
        <> 
        <ListSeasons>
           {data.map((season) => (
                <> 
                <EpisSeasonItem
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
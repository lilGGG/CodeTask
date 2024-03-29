import React,  { useState, useEffect } from 'react';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import {getEpisodes} from "../../../../api/DataService.js";
import styled from "styled-components";
import  EpisSeasonItem from '../../molecules/EpisSeasonItem/EpisSeasonItem';

const EpisodesTitle = styled.h1`
  font-size: 1em;
  text-align: left;
  color: chocolate;
`;
const ListEpisodes = styled.ul`
  list-style-type: none;
`;

/**
 * 
 * @param {number } props seasonId 
 * give specific season's(id) episodes 
 * @returns episodes list
 */

function Episodes(props) {
    const [episodes, setEpisodes] = useState({});

    useEffect(() => {
        async function fetchDataEpisodes() {
          let epis_result = await getEpisodes(props.seasonId);
          setEpisodes(epis_result);
        }
        fetchDataEpisodes();
      }, [props.seasonId]);
    
      const data = Array.from(episodes);

    return (
        <> 
         <ListEpisodes>
            <EpisodesTitle> Episodes </EpisodesTitle> 
           {data.map((epis) => (
                <> 
                 <EpisSeasonItem
                   itemName={epis.name}
                   srcImg = {epis.image? epis.image.medium: ""}
                   img = {epis.image}
                   url={epis.url}
                />
                </>
            ))}
        </ListEpisodes>
        </>
    )
}

export default Episodes
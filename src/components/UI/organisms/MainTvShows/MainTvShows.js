import React,  { useState, useEffect } from 'react';
import {getSeasons} from "../../../../api/DataService.js";
import Seasons from '../Seasons/Seasons.js';
import TableShow from '../../atoms/TableShow/TableShow';
import Grid from 'material-grid/dist/Grid/Grid';
import Cell from 'material-grid/dist/Grid/Cell';
import styled from "styled-components";

const ShowSeasonTitle = styled.h1`
  font-size: 2em;
  text-align: left;
  color: chocolate;
`;


/**
 * Component displays tv shows, seasons and episodes
 * @param {object} props  tv shows records object
 * @returns 
 */

function Shows(props) {
    const [selectedIn, setSelectedIn] = useState(0);
    const [seasons, setSeasons] = useState({});

    useEffect(() => {
        async function fetchDataSeasons() {
          let seasons_result = await getSeasons(selectedIn);
          setSeasons(seasons_result);
        }
        fetchDataSeasons();
      }, [selectedIn]);
    
    return (
        <> 
        <Grid>
            <Cell col={9}>
                <ShowSeasonTitle> Shows </ShowSeasonTitle>
                <TableShow  
                   selectedIn ={selectedIn}  
                   setSelectedIn={setSelectedIn} 
                   records={props.records}> 
                </TableShow>
            </Cell>
            <Cell col={3}>
                <ShowSeasonTitle> Seasons  </ShowSeasonTitle>
                {(seasons!==undefined || seasons!==null) ? <Seasons seasons={seasons}>
                 </Seasons>: ""}
            </Cell>
        </Grid>
        </>
    )
}

export default Shows
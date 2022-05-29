import React,  { useState, useEffect } from 'react';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import {getSeasons} from "../api/DataService.js";
// import Seasons from "./Seasons";
import Seasons from './UI/organisms/Seasons/Seasons.js';
import TableShow from './UI/atoms/TableShow/TableShow.js';
import Grid from 'material-grid/dist/Grid/Grid';
import Cell from 'material-grid/dist/Grid/Cell';
import styled from "styled-components";

const ShowSeasonTitle = styled.h1`
  font-size: 2em;
  text-align: left;
  color: chocolate;
`;

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

    //   console.log("seasons", seasons);
    
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
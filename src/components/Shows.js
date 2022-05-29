import React,  { useState, useEffect } from 'react';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import {getSeasons} from "../api/DataService.js";
// import Seasons from "./Seasons";
import Seasons from './UI/organisms/Seasons/Seasons.js';
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
              <ReactTable
                data={props.records}
                columns={[
                {
                    Header: "Tv Show Image",
                    accessor: "show.image.original",
                    minWidth: 100,
                    Cell: (row) => {
                        return <div> {row.original.show.image? <img height={34} src={row.original.show.image.original } />: "" } </div>
                    },
                },
                {
                    Header: "Title",
                    accessor: "show.name",
                    minWidth: 100
                },
                {
                    Header: "Description",
                    accessor: "show.summary",
                    minWidth: 300
                },
                {
                    Header: "End Date",
                    accessor: "show.ended",
                    minWidth: 100
                },
                {
                    Header: "Type",
                    accessor: "show.type",
                    minWidth: 100
                },
                {
                    Header: "Language",
                    accessor: "show.language",
                    minWidth: 100
                },
                ]}
                getTrProps={(selected, rowInfo) => {
                    if (rowInfo && rowInfo.row) {
                    return {
                        onClick: (e) => {
                            // console.log("rowInfo",rowInfo);
                            // console.log("rowInfo row",rowInfo.row);
                            // console.log("row index ",rowInfo.index);
                            setSelectedIn(rowInfo.index);
                            // console.log("selected 1", selectedIn);
                        },
                        style: {
                        background: rowInfo.index === selectedIn ? 'chocolate' : 'papayawhip',
                        color: rowInfo.index === selectedIn ? 'white' : 'black'
                        }
                    }
                    }else{
                    return {}
                    }
                }}
            />
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
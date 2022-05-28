import React,  { useState, useEffect } from 'react';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import {getSeasons} from "../api/DataService.js";
import Seasons from "./Seasons";
// import ReactTable from '@kavience/react-table';
// import MaterialTable from "material-table";
import Grid from 'material-grid/dist/Grid/Grid';
import Cell from 'material-grid/dist/Grid/Cell'

function Shows(props) {


    // const [state, setState] = useState({selectedIn: 0});
    const [selectedIn, setSelectedIn] = useState(0);
    const [seasons, setSeasons] = useState({});

    useEffect(() => {
        async function fetchDataSeasons() {
          let seasons_result = await getSeasons(selectedIn);
          setSeasons(seasons_result);
        }
        fetchDataSeasons();
        // setVisible(false);
      }, [selectedIn]);

      console.log("seasons", seasons);

    //   const seasonConvert = ( seasons) => {
    //       console.log("seasons",seasons);
    //       return seasons;
    //     // setScreenState("job");
    //     // setSelectedJobRowData(null);
    //   };

    //   function seasonConvert(seasons) {
    //       console.log("seasons", seasons);
    //       return seasons;
    //     // setIsOnline(status.isOnline);
    //   }


    // const filteredData = props.records.filter((el) => {
    //     if (props.input === '') {s
    //         return el;
    //     }
    //     else {
    //         // return el.Header;
    //         // el.name
    //         // return el;

    //         // console.log("el", el);
    //         return el.show.name.toLowerCase().includes(props.input)
    //         // return el.title.toLowerCase().includes(props.input)
    //     }
       
    // })

    // console.log("filteredData", filteredData)
  
    
    return (
        <> 
        <Grid>
            <Cell col={9}>
                <p> Shows </p>
              <ReactTable
                
                data={props.records}
                columns={[
                {
                    Header: "Tv Show Image",
                    accessor: "show.image.original",
                    minWidth: 100,
                    Cell: (row) => {
                        return <div> {row.original.show.image? <img height={34} src={row.original.show.image.original } />: "" } </div>
                        // return <div> <img height={34} src={row.original.show.image?row.original.show.image.original: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" } /> </div>
                    },
                },
                {
                    Header: "Title",
                    // accessor: `${show.name? show.name:""}`,
                    // accessor: "show.name? show.name:",
                    // accessor: "name? name: ",
                    accessor: "show.name",
                    minWidth: 100
                },
                {
                    Header: "Description",
                    // accessor: `${show.summary? show.summary:""}`,
                    // accessor: "show.summary? show.summary:",
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
                            console.log("rowInfo",rowInfo);
                            console.log("rowInfo row",rowInfo.row);
                            console.log("row index ",rowInfo.index);
                            // console.log("selected 0", selectedIn);
                            setSelectedIn(rowInfo.index);
                            console.log("selected 1", selectedIn);
                        //   this.setState({
                        //     selected: rowInfo.index
                        //   })
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
                seasons
                {(seasons!==undefined || seasons!==null) ? <Seasons seasons={seasons}>

                 </Seasons>: ""}
            </Cell>
            {/* <Cell col={3}>
                 episodes
            </Cell> */}
        </Grid>
                
     
        </>
    )
}

export default Shows
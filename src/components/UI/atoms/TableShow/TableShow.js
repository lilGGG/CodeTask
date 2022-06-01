import React,  { useState, useEffect } from 'react';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

/**
 *  Table component for tv shows display
 * @param {object} props  
 * @returns  
 */

function TableShow(props) {

    return (
        <> 
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
                    minWidth: 300,
                    Cell: (row) => {
                        return row.original.show.summary?row.original.show.summary.replace( /(<([^>]+)>)/ig, '') : "" ;
                    },
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
                            props.setSelectedIn(rowInfo.index);
                        },
                        style: {
                        background: rowInfo.index === props.selectedIn ? 'chocolate' : 'papayawhip',
                        color: rowInfo.index === props.selectedIn ? 'white' : 'black'
                        }
                    }
                    }else{
                    return {}
                    }
                }}
            />
           
        </>
    )
}

export default TableShow




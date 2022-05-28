import React,  { useState } from 'react'
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
// import ReactTable from '@kavience/react-table';
// import MaterialTable from "material-table";


function Shows(props) {

    const [selectedIn, setSelectedIn] = useState(0);

    // const filteredData = props.records.filter((el) => {
    //     if (props.input === '') {
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

            // getTrProps={(selected, rowInfo) => {
            //     if (rowInfo && rowInfo.row) {
            //       return {
            //         onClick: (e) => {
            //             setSelected(rowInfo.index)
            //         //   this.setState({
            //         //     selected: rowInfo.index
            //         //   })
            //         },
            //         style: {
            //         //   background: rowInfo.index === selected ? '#00afec' : 'white',
            //           color: rowInfo.index === selected ? 'white' : 'black'
            //         }
            //       }
            //     }else{
            //       return {}
            //     }
            //   }}
        />
       { /*<ul>
            {filteredData.map((item) => (
                <> 
                    <li  key={item.id}>    <img  src={item.image} /> {item.title} {item.description} </li>
                </>
            ))}
        </ul>
            */}
        </>
    )
}

export default Shows
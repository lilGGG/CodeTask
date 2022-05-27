import { React } from 'react'
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
// import ReactTable from '@kavience/react-table';
// import MaterialTable from "material-table";


function Shows(props) {
    const filteredData = props.records.filter((el) => {
        if (props.input === '') {
            return el;
        }
        else {
            return el.title.toLowerCase().includes(props.input)
        }
    })
    
    return (
        <> 
         <ReactTable
            data={filteredData}
            columns={[
            {
                Header: "Image",
                accessor: "image",
                minWidth: 300,
                Cell: (row) => {
                   return <div><img height={34} src={row.original.image}/></div>
                 },
            },
            {
                Header: "Title",
                accessor: "title",
                minWidth: 300
            },
            {
                Header: "Description",
                accessor: "description",
                minWidth: 300
            },
            {
                Header: "Author",
                accessor: "author",
                minWidth: 300
            },
            ]}
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
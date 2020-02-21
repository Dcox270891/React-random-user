import React, { useState } from "react";

function TableHeader({title, users}) {
    const [order, setOrder] = useState("");
    
    function sortTable(data){
        if (order === ""){
            setOrder("ascending")
        } else if (order === "ascending"){
            setOrder("descending")
        } else if (order === "descending"){
            setOrder("")
        }
        console.log(users)
    };

    return(
        <th onClick={sortTable}>{title}</th>
    )
};

export default TableHeader;
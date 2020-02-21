import React, { useState } from "react";

function TableHeader({title, userData}) {
    const [order, setOrder] = useState("");
    
    function sortTable(userData){
        if (order === ""){
            setOrder("ascending")
        } else if (order === "ascending"){
            userData.sort();
            setOrder("descending")
        } else if (order === "descending"){
            userData.reverse();
            setOrder("")
        }
    };

    return(<>
        <th onClick={sortTable}>{title}</th>
    </>)
};

export default TableHeader;
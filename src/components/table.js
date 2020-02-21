import React, { useState, useEffect } from "react";
import UserRow from "./user-row";
import TableHeader from "./table-header";
import api from "../utils/api";



function Table(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        api.amountOfUsers(20)
            .then(res => { 
                setUsers( res.data.results );
            })
            .catch(err => console.log(err))
    }, []);

    

    return(
        <div>
            <TableHeader title="First Name" userData={users.map(user => user.name.first)}/>
            <TableHeader title="Last Name" userData={users.map(user => user.name.last)}/>
            <TableHeader title="Gender" userData={users.map(user => user.gender)}/>
            <TableHeader title="Street" userData={users.map(user => user.location.street.name)}/>
            <TableHeader title="City" userData={users.map(user => user.location.city)}/>
            <TableHeader title="State" userData={users.map(user => user.location.state)}/>
            <TableHeader title="Country" userData={users.map(user => user.location.country)}/>
            <th>Picture</th>
            {users.map(user => <UserRow user={user} />)};
        </div>
    )
};

export default Table;
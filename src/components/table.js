import React from "react";
import TableHeader from "./table-header";
import Results from "./results";

function Table({users, search}){

    return(<table>
        <thead>
            <tr>
                <TableHeader title="First Name" userData={users}/>
                <TableHeader title="Last Name" userData={users}/>
                <TableHeader title="Gender" userData={users}/>
                <TableHeader title="Street" userData={users}/>
                <TableHeader title="City" userData={users}/>
                <TableHeader title="State" userData={users}/>
                <TableHeader title="Country" userData={users}/>
                <th>Picture</th>
            </tr>
        </thead>
        <tbody>
            <Results users={users} search={search}/>
        </tbody>
        </table>)
};

export default Table;
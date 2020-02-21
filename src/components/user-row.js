import React from "react";

function UserRow({user}){
    return(<tr>
        <td>{user.name.first}</td>
        <td>{user.name.last}</td>
        <td>{user.gender}</td>
        <td>{user.location.street.name}</td>
        <td>{user.location.city}</td>
        <td>{user.location.state}</td>
        <td>{user.location.country}</td>
        <td><img  src={user.picture.thumbnail}/></td>
    </tr>)
};

export default UserRow;
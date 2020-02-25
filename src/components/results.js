import React, { useEffect } from "react";
import UserRow from "./user-row";

function Results({search, users}) {
    useEffect(() => {
        if (search === "")
        {
            return users.map(user => <UserRow user={user} key={user.login.uuid}/>)
        } else {
            users.filter((user) => {
                const allResults = [];
                user.filter(search).push(allResults);
        
                return allResults.map(user => <UserRow user={user} key={user.login.uuid}/>)
            });
        };

    }, [search])
    

    return (<>
        
    </>);
};

export default Results;


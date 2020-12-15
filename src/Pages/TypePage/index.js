import React, { useEffect, useState } from 'react';

function TypePage(){

    const [type, setType] = useState(false);
    const {id} = props.match.params;

    useEffect( () => {
        fetch(url)
        .then( res => res.json())
        .then( type => {
            setType(type);
        });
    }, []);

    return(
        <div>
            Types
        </div>
    )
}

export default TypePage;
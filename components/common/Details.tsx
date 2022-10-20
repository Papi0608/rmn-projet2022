import React from 'react';

function Details(props:any) {
    const etages = props.etages;
    console.log(etages)
    return (
    <li className="travelcompany-input"  >
        {etages}
    </li>
    );
}

export default Details;
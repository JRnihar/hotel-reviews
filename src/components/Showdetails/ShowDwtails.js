import React from 'react';
import { useParams } from 'react-router-dom';

const ShowDwtails = () => {
    const{id}=useParams()
    return (
        <div>
            <h2>show details : {id}</h2>
        </div>
    );
};

export default ShowDwtails;
import React from 'react';

function Method({ method, url }) {
    return (
        <>
            <h3>{method}</h3>
            <p>{url}</p>
        </>
    )
}
export default Method
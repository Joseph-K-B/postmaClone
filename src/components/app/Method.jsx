import React from 'react';

export const Method = ({ method, url }) => {
    return (
        <>
            <h3>{method}</h3>
            <p>{url}</p>
        </>
    )
}
export default Method
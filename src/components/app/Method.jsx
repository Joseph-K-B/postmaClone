import React from 'react';

const Method = ({ method, url }) => {
    return (
        <>
            <h3 key={method}>{method}</h3>
            <p key={url}>{url}</p>
        </>
    )
}
export default Method
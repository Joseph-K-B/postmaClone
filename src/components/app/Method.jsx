import React from 'react';

export default function Method({ method, url }) {
    return (
        <>
            <h3>{method}</h3>
            <p>{url}</p>
        </>
    )
}
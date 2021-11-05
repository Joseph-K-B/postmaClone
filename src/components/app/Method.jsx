import React from 'react';

export default function Method({ method, url }) {
    return (
        <>
            <h1>{method}</h1>
            <p>{url}</p>
        </>
    )
}
import React from 'react'
import ReactJson from 'react-json-view'



export default function Content({contents}) {
    return (
        <figure>
           <h1>Response</h1> 
        <figcaption className='react-json'>
            <ReactJson src={contents} theme='grayscale' />
        </figcaption>
        </figure>
    )
}
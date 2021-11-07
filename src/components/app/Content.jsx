import React from 'react'
import ReactJson from 'react-json-view'



function Content({ contents }) {
    return (
        <figure>
           <h1>Response</h1> 
        <figcaption className='react-json'>
            <ReactJson src={contents} theme='grayscale' />
        </figcaption>
        </figure>
    )
}

export default Content
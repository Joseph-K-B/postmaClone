import React from 'react'
import ReactJson from 'react-json-view'


export default function Content({contents}) {
    return (
        <figure>
           <h1>Response</h1> 
        <figcaption>
            <ReactJson src={contents} theme='monokai'/>
            {/* <ul>
                <li>{id}</li>
                <li>{title}</li>
                <li>{body}</li>
                <li>{userId}</li>
            </ul> */}
        </figcaption>
        </figure>
    )
}
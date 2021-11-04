import React from 'react'
import ReactJson from 'react-json-view'


export default function Content({ id, title, body, userId }) {
    return (
        <figure>
           <h1>Response</h1> 
        <figcaption>
            <ReactJson src={id, title, body, userId} theme='monokai'/>
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
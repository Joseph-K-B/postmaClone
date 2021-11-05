import React from "react";
import Method from "./app/Method";


export default async function MethodList({ methodList }) {
    const methods = await methodList.map(({method, url}) => {
        <li>
            <Method 
            method={method}
            url={url}
            />
        </li>
    })
    if(methodList === undefined) {
        return <p>Waiting for request</p>
    } else {
    return <ul aria-label='method-list'>{methods}</ul>}
}
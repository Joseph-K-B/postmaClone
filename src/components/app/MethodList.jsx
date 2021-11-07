import React from "react";
import Method from "./Method";


export default function  MethodList({ methodList }) {
    if(methodList === undefined) {
        return <p>Waiting for request</p>
    } else {
        <h2>History</h2>
        const methods = methodList.map(({method, url}) => {
            <li
            onChange={onMethodInput}>
                <Method 
                method={method}
                url={url}
                />
            </li>
        })
    return <ul aria-label='method-list'>{methods}</ul>}
    }

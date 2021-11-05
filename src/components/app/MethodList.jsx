import React from "react";
import Method from "./Method";


export default function MethodList({ methodList, contents }) { 
    if(contents === undefined) {
        return <p>Waiting for request</p>
    } else {
        const methods = methodList.push(({method, url}) => {
            <li>
                <Method 
                method={method}
                url={url}
                />
            </li>
        })
    return <ul aria-label='method-list'>{methods}</ul>
    }
}
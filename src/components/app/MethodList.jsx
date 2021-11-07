import React from "react";
import Method from "./Method";


export default function  MethodList() {
    // if(methodList === undefined) {
    //     return <p>Waiting for request</p>
    // } else {
        const local = localStorage.getItem('LOCAL');
        const arr = JSON.parse(local)
        const methods = arr.map(({method, url}) => {
            return (
            <>
                <h2>History</h2>
                <li>
                    <Method
                    method={method}
                    url={url} />
                </li>
            </>
            )
        })

    return <ul aria-label='method-list'>{methods}</ul>}
    // }


    
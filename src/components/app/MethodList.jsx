import React from "react";
import Method from "./Method";

const MethodList = () => {
        const local = localStorage.getItem('LOCAL');
        const arr = JSON.parse(local)
        const methods = arr.map(({method, url}) => {
            return (
            <>
                <h2 key='title'>History</h2>
                <li>
                    <Method
                    key='item'
                    method={method}
                    url={url} />
                </li>
            </>
            )
        })

    return <ul aria-label='method-list'>{methods}</ul>}

    export default MethodList


    
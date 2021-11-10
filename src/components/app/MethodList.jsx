import React from "react";
import Method from "./Method";

const MethodList = ({ arr }) => {
        // const local = localStorage.getItem('LOCAL');
        // const arr = JSON.parse(local)
        console.log('ARR', arr)
        const methods = arr.map(({method, url}) => {
            return (
            <>
                <li>
                    <Method
                    key='item'
                    method={method}
                    url={url} />
                </li>
            </>
            )
        })

    return <> 
    <h2 key='title'>History</h2>
    <ul aria-label='method-list'>{methods}</ul>
    </>
}

    export default MethodList


    
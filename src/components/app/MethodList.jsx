import React from "react";
import Method from "./Method";
import css from '../../styles/historyList.css'

const MethodList = ({ arr }) => {
        const methods = arr.map(({method, url}) => {
            return (
            <>
                <li className={css.list}>
                    <Method
                    key='item'
                    method={method}
                    url={url} />
                </li>
            </>
            )
        })

    return <> 
    <h1 key='title' className={css.top}>History</h1>
    <ul aria-label='method-list'>{methods}</ul>
    </>
}

    export default MethodList


    
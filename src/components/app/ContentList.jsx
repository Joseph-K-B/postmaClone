import React from "react";
import Content from './Content'
import ReactJson from 'react-json-view'

export default function ContentList({ contents }) {
    const contentList = contents.map(({ contents, id }) => (
        <ReactJson src={contents} key={`${id}`} theme='monokai'/>
        // <li key={`${id}`}>
        //     <Content
        //     content = {content} />
        // </li>
    ));
    return <figure>{contentList}</figure>
}
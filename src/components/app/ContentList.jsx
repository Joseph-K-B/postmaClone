import React from "react";
import Content from './Content'

export default function ContentList({ contents }) {
    const contentList = contents.map(({ content }) => (
        <li key={`${content}`}>
            <Content
            content = {content} />
        </li>
    ));
    return <ul>{contentList}</ul>
}
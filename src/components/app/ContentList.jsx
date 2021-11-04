import React from "react";
import Content from './Content'

export default function ContentList({ content }) {
    const contentList = content.map(({ id, title, body, userId }) => (
        <li key={`${id}`}>
            <Content
            id={id}
            title={title}
            body = {body}
            userId = {userId} />
        </li>
    ));
    return <ul>{contentList}</ul>
}
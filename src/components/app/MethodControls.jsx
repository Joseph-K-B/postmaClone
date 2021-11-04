import React from 'react';

export default function MethodControls({
    url,
    onUrlInput,
    onSubmit
}) {
    return(
        <form onSubmit={onSubmit}>
            <label htmlFor='url'>Make an API call</label>
            <input
            id='url'
            name='url'
            type='text'
            value={url}
            onChange={onUrlInput}
            />
            <label htmlFor='GET'>GET</label>
            <input type='radio' id='GET' name='GET' value='GET'/>
            <button aria-label='make-request'>Go</button>
        </form>
    )
}
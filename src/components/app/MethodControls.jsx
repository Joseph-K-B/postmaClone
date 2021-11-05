import React from 'react';

export default function MethodControls({
    url,
    method,
    onUrlInput,
    onRadioInput,
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
            <input 
                type='radio' 
                id='GET' 
                name='GET' 
                value={method} 
                onChange={onRadioInput}
            />
            <label htmlFor='POST'>POST</label>
            <input 
                type='radio' 
                id='POST' 
                name='POST' 
                // value='POST' 
                value={method} 
                onChange={onRadioInput}/>
            <label htmlFor='PATCH'>PATCH</label>
            <input 
                type='radio' 
                id='PATCH' 
                name='PATCH' 
                value={method} 
                onChange={onRadioInput}
            />
            <label htmlFor='DELETE'>DELETE</label>
            <input 
                type='radio' 
                id='DELETE' 
                name='DELETE' 
                // value='DELETE' 
                value={method} 
                onChange={onRadioInput}
            />
            <button aria-label='make-request'>Go</button>
            <textarea></textarea>
        </form>
    )
}
import React from 'react';

export default function MethodControls({
    url,
    inputField,
    onUrlInput,
    onRadioInput,
    onObjectInput,
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
                value='GET' 
                onChange={onRadioInput}
            />
            <label htmlFor='POST'>POST</label>
            <input 
                type='radio' 
                id='POST' 
                name='POST' 
                value='POST' 
                onChange={onRadioInput}/>
            <label htmlFor='PATCH'>PATCH</label>
            <input 
                type='radio' 
                id='PATCH' 
                name='PATCH' 
                value='PATCH' 
                onChange={onRadioInput}
            />
            <label htmlFor='DELETE'>DELETE</label>
            <input 
                type='radio' 
                id='DELETE' 
                name='DELETE' 
                value='DELETE'
                onChange={onRadioInput}
            />
            <button aria-label='make-request'>Go</button>
            <textarea
                id='object'
                name='object'
                type='text'
                value={inputField}
                onChange={onObjectInput}
            ></textarea>
        </form>
    )
}
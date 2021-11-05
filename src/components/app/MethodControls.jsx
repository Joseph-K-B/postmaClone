import React from 'react';
// import '../../styles/method-controls.css'

export default function MethodControls({
    url,
    inputField,
    onUrlInput,
    onRadioInput,
    onObjectInput,
    onSubmit
}) {
    return(
        <form onSubmit={onSubmit} className='form'>
            <label htmlFor='url'>Make an API call</label>
            <input 
                id='url'
                name='url'
                type='text'
                value={url}
                onChange={onUrlInput}
                className='url-input'
            />
            <div className='radio-div'>
            <label htmlFor='GET'>GET</label>
            <input 
                type='radio' 
                id='GET' 
                name='GET' 
                value='GET' 
                onChange={onRadioInput}
                className='radio-input'
            />
            <label htmlFor='POST'>POST</label>
            <input 
                type='radio' 
                id='POST' 
                name='POST' 
                value='POST' 
                onChange={onRadioInput}
                className='radio-input'
                />
            <label htmlFor='PATCH'>PATCH</label>
            <input 
                type='radio' 
                id='PATCH' 
                name='PATCH' 
                value='PATCH' 
                onChange={onRadioInput}
                className='radio-input'
            />
            <label htmlFor='DELETE'>DELETE</label>
            <input 
                type='radio' 
                id='DELETE' 
                name='DELETE' 
                value='DELETE'
                onChange={onRadioInput}
                className='radio-input'
            />
            </div>
            <button aria-label='make-request'>Go</button>
            <label htmlFor= 'object'></label>
            <textarea
                id='object'
                name='object'
                type='text'
                value={inputField}
                onChange={onObjectInput}
                className='object-input'
                placeholder='JSON Format'
            ></textarea>
        </form>
    )
}
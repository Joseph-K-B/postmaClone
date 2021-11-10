import React from 'react';
import css from '../../styles/controlStyles.css'

function MethodControls({
    url,
    inputField,
    onUrlInput,
    onRadioInput,
    onObjectInput,
    onSubmit
}) {
    return(
        <form onSubmit={onSubmit} className={css.form}>
                      
             <div className={css.radio}>
            <input 
                type='radio' 
                id='GET' 
                name='GET' 
                value='GET' 
                onChange={onRadioInput}
                className={css.click}
            />
            <label htmlFor='GET' className={css.method}>GET</label>
            <input 
                type='radio' 
                id='POST' 
                name='POST' 
                value='POST' 
                onChange={onRadioInput}
                className={css.click}
                />
            <label htmlFor='POST' className={css.method}>POST</label>
            <input 
                type='radio' 
                id='PUT' 
                name='PUT' 
                value='PUT' 
                onChange={onRadioInput}
                className={css.click}
                />
            <label htmlFor='PUT' className={css.method}>PUT</label>
            <input 
                type='radio' 
                id='PATCH' 
                name='PATCH' 
                value='PATCH' 
                onChange={onRadioInput}
                className={css.click}
            />
            <label htmlFor='PATCH' className={css.method}>PATCH</label>
            <input 
                type='radio' 
                id='DELETE' 
                name='DELETE' 
                value='DELETE'
                onChange={onRadioInput}
                className={css.click}
            />
            <label htmlFor='DELETE' className={css.method}>DELETE</label>
            </div>
            <div className={css.input}>
            <label htmlFor= 'object'></label>
            <input 
                id='url'
                name='url'
                placeholder='https://'
                type='text'
                value={url}
                onChange={onUrlInput}
                className={css.url}
            />
            <label htmlFor='url'></label> 
            <textarea
                id='object'
                name='object'
                type='text'
                value={inputField}
                onChange={onObjectInput}
                className='object-input'
                placeholder='Double quotes for keys & values'
            ></textarea>
             <button aria-label='make-request'>Go</button>
             </div>
        </form>
    )
}

export default MethodControls
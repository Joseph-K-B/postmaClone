import React from 'react';
import css from '../../styles/controlStyles.css'

function MethodControls({
    url,
    auth,
    inputField,
    onUrlInput,
    onRadioInput,
    onObjectInput,
    onAuthInput,
    onHeaderInput,
    onSubmit
}) {
    return(
        <form onSubmit={onSubmit} className={css.form}>                      
             <div className={css.radio}>
            <input 
                type='radio' 
                id='GET' 
                name='method' 
                value='GET' 
                onChange={onRadioInput}
                className={css.click}
            />
            <label htmlFor='GET' className={css.method}>GET</label>
            <input 
                type='radio' 
                id='POST' 
                name='method' 
                value='POST' 
                onChange={onRadioInput}
                className={css.click}
                />
            <label htmlFor='POST' className={css.method}>POST</label>
            <input 
                type='radio' 
                id='PUT' 
                name='method' 
                value='PUT' 
                onChange={onRadioInput}
                className={css.click}
                />
            <label htmlFor='PUT' className={css.method}>PUT</label>
            <input 
                type='radio' 
                id='PATCH' 
                name='method' 
                value='PATCH' 
                onChange={onRadioInput}
                className={css.click}
            />
            <label htmlFor='PATCH' className={css.method}>PATCH</label>
            <input 
                type='radio' 
                id='DELETE' 
                name='method' 
                value='DELETE'
                onChange={onRadioInput}
                className={css.click}
            />
            <label htmlFor='DELETE' className={css.method}>DELETE</label>
            </div>
            <div className={css.input}>
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
            <input 
                id='auth'
                name='auth'
                placeholder='login'
                type='text'
                value={auth}
                onChange={onAuthInput}
                className={css.auth}
            />
            <label htmlFor= 'header'></label>
            <input 
                id='header'
                name='header'
                placeholder='headers:'
                type='text'
                value={header}
                onChange={onHeaderInput}
                className={css.header}
            />
            <label htmlFor= 'auth'></label>
            <textarea
                id='object'
                name='object'
                type='text'
                value={inputField}
                onChange={onObjectInput}
                className='object-input'
                placeholder='Double quotes for keys & values'
            ></textarea>
            <label htmlFor= 'object'></label>
             <button aria-label='make-request'>Request</button>
             </div>
        </form>
    )
}

export default MethodControls
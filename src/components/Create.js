import React from 'react'

export default function Create(props)
{
    
    function onSubmit (e) {
        e.preventDefault();
        props.onCreate(e, e.target.title.value, e.target.description.value);
    }

    return (
        <>
            <h2>CREATE</h2>
            <form onSubmit={onSubmit}>
            <p>
                <label htmlFor="title"> * title </label>
                <input type="text" id="title" name="title" />
            </p>
            <p>
                <label htmlFor="description"> * description </label>
                <textarea id="description" name="description" ></textarea>
            </p>
            <p>
                <input type="submit" value="OK" />
            </p>
        </form>
        </>
        
    );
}

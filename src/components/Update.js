import React from 'react'

export default function Update(props)
{
    
    function onSubmit (e) {
        e.preventDefault();
        props.onUpdate(e, props.content.id, e.target.title.value, e.target.description.value);
    }

    return (
        <>
            <h2>UPDATE</h2>
            <form onSubmit={onSubmit}>
                <p>
                    <label htmlFor="title"> * title </label>
                    <input type="text" id="title" name="title" defaultValue={props.content.title} />
                </p>
                <p>
                    <label htmlFor="description"> * description </label>
                    <textarea id="description" name="description" defaultValue={props.content.description}></textarea>
                </p>
                <p>
                    <input type="submit" value="OK" />
                </p>
            </form>
        </>
        
    );
}

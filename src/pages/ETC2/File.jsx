import React from 'react'

class FileInput extends React.Component
{
    constructor(props){
        super(props);

        this.fileInput = React.createRef();
    }

    handleSubmit(e){
        e.preventDefault();
        let files = e.target[0].files;
        let reader = new FileReader();

        Array.from(files).forEach((file) => {
            if (file.type.startsWith('image')){
                reader.readAsDataURL(file);
                reader.onload = function(ee){
                    let img = new Image();
                    img.src = ee.target.result;
                    img.onload = function () {
                        console.table( {width: img.width, height: img.height} );
                    }
                }
            }
        });
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>
                    Upload : 
                    <input type="file" ref={this.fileInput} />
                </label>
                <input type="submit" value="submit" />
            </form>
        );
    }
}

export default class File extends React.Component
{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <h2>File</h2>
                <FileInput />
            </>
        );
    }
}
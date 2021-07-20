import { useState } from "react";


const Create = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('Mario');

    return ( <div className="create">
        <h1>Create a new blog</h1>
        <form >

            <label >Blog title:</label>
            <input 
            type="text"
            required
            value = {title}
            onChange= {(e)=>setTitle(e.target.value)}
            />

            <label>Blog body:</label>
            <textarea 
            required
            value = {content}
            onChange = {(e)=>setContent(e.target.value)}
            
            />

 
            <label>Blog author:</label>
            <select
            value = {author}
            onChange = {(e)=>setAuthor(e.target.value)}
            >
                <option value="mario">Mario</option>
                <option value="yoshi">Yoshi</option>
            </select>
            <button>Add Blog</button>
            <p>{title}</p>
            <p>{content}</p>
            <p>{author}</p>
        </form>
    </div> );
}
 
export default Create;
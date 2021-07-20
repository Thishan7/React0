import { useState } from "react";


const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setContent] = useState('');
    const [author, setAuthor] = useState('Mario');

    const handleSubmit = (e) => {
        //preventing refreshing page when pressing submit button
        e.preventDefault();
        const blog = { title, body, author };
        console.log(blog);

        fetch('http://localhost:8000/blogs',{
        method : 'POST',//specifies method
        headers : {"Content-Type":"application/json"},//specifies type of content being sent to the server
        body : JSON.stringify(blog) //turn blog into json string
        })
        .then(()=>{
            console.log('new b log added');
        })

    }

    return ( <div className="create">
        <h1>Create a new blog</h1>
        <form onSubmit={handleSubmit}>

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
            value = {body}
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
            <p>{body}</p>
            <p>{author}</p>
        </form>
    </div> );
}
 
export default Create;
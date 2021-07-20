import { useState } from "react";
import { useHistory } from "react-router"; 

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setContent] = useState('');
    const [author, setAuthor] = useState('Mario');
    const [isPending, setIspending] = useState(false);//changing button when saving
    const history = useHistory();


    const handleSubmit = (e) => {
        //preventing refreshing page when pressing submit button
        e.preventDefault();
        const blog = { title, body, author };
        console.log(blog);

        setIspending(true);

        fetch('http://localhost:8000/blogs',{
        method : 'POST',//specifies method
        headers : {"Content-Type":"application/json"},//specifies type of content being sent to the server
        body : JSON.stringify(blog) //turn blog into json string
        })
        .then(()=>{
            console.log('new b log added');
            setIspending(false);
            //history.go(-1); after submitting the page it redirects to the page before you were.
            history.push('/'); //forward user to homepage
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
            {!isPending&&<button>Add Blog</button>}
            {isPending&&<button disabled>Saving Blog</button>}
      
        </form>
    </div> );
}
 
export default Create;
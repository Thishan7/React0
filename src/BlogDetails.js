import { useHistory, useParams } from "react-router-dom";
import useFetch from "./usefetch";
const BlogDetails = () => {
    //get pasing variable by use params
    const { id } = useParams();
    const { data: blog, isPendig, error } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    //console.log(blog.body);

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        })
        .then (()=>{
            history.push('/');
        })
    }

    // .then(()=>{
    //     console.log('new b log added');
    //     setIspending(false);
    //     //history.go(-1); after submitting the page it redirects to the page before you were.
    //     history.push('/'); //forward user to homepage
    // }

    return (
        <div className="blog-details">
            {/* <h2>Blog Details - {id} </h2> */}
            {isPendig && <div>Loding....</div>}
            {error && <div> {error} </div>}
            {blog && 
            (<article>
                <h2>{blog.title}</h2> <br />
                <p>Written by: {blog.author}</p> <br />
                <div> {blog.body}</div>
            </article>)}
            <button onClick = {handleDelete}>Delete</button>
        </div>


    );
}

export default BlogDetails;
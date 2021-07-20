import { useParams } from "react-router-dom";
import useFetch from "./usefetch";
const BlogDetails = () => {
    //get pasing variable by use params
    const { id } = useParams();
    const { data: blog, isPendig, error } = useFetch('http://localhost:8000/blogs/' + id);
    //console.log(blog.body);
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
        </div>


    );
}

export default BlogDetails;
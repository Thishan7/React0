import { Link } from "react-router-dom";
import BlogDetails from "./BlogDetails";

const BlogList = (props) => {
     const blogs = props.blogs;
    //getting multiple arguments
    
    return ( 
        <div className="class-list">
            <h2>{props.title}</h2>
             {blogs.map((blog) => (
             <div className="blog-preview" key={blog.id} >
                  {/* these link here represent inside ` `, it is very important. not ' ' or " ". */}
                  <Link to ={`/blogDetails/${blog.id}`}> 
                  <h2>{ blog.title }</h2> 
                   <p>Written by { blog.author }</p> 
                  </Link>
                   
             </div>))}
        </div>
     );
}
 
export default BlogList;


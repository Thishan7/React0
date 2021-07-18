const BlogList = (props) => {
     const blogs = props.blogs;
    //getting multiple arguments
    
    return ( 
        <div className="class-list">
            <h2>{props.title}</h2>
             {blogs.map((blog) => (<div className="blog-preview" key={blog.id} > <h2>{ blog.title }</h2> <p>Written by { blog.author }</p> 
             {/* 3 calling handle delete function by passing blog id*/}
             <button onClick={()=> props.handleDelete(blog.id)}>Delete blog</button>
             </div>))}
            
        </div>
     );
}
 
export default BlogList;


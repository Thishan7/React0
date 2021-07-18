import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    
const title1 = "All blogs";  
const title2 = "Mario's blogs";
const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])
// 1) Create handle delete function for delete blog
function handleDelete(id)
{
  const blog = blogs.filter(blogs => blogs.id !== id); 
  setBlogs(blog);
}
//Handle delete function also can written as this
//  const handleDelete = (id) => {
//   const newBlogs = blogs.filter((blog)=> blog.id!==id);
//   setBlogs(newBlogs);
// }


  return (
    <div className="home">
        {/* passing data to other js fle */}
      <BlogList blogs={blogs} title={title1} handleDelete={handleDelete}/>
      {/* Filter data and passing to other js file */}
       <BlogList blogs={blogs.filter((data) => data.author ==='mario')} title={title2} handleDelete={handleDelete} /> {/* 2 passing handle delete function as argument*/}
    </div>
  );
}
 
export default Home; 













import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    
const title1 = "All blogs";  
const title2 = "Mario's blogs";
const [blogs, setBlogs] = useState(null)


useEffect (()=>{
  fetch("http://localhost:8000/blogs")
  .then(res => {
    return res.json();
  })
  .then(data =>{
    console.log(data);
    setBlogs(data);
  })
},[])
useEffect(()=>{
console.log("use effect run");
},[]);

  return (
    <div className="home">
        {/* passing data to other js fle */}
      {blogs && <BlogList blogs={blogs} title={title1} />}
    </div>
  );
}
 
export default Home; 













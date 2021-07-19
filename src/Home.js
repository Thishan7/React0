import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    
const title1 = "All blogs";  
const [blogs, setBlogs] = useState(null)
const [isPendig,setIsPending] = useState(true);

useEffect (()=>{
  setTimeout(() => {
    fetch("http://localhost:8000/blogs")
    .then(res => {
      return res.json();
    })
    .then(data =>{
      console.log(data);
      setBlogs(data);
      setIsPending(false);
    })
  
  }, 2000);
 },[])


useEffect(()=>{
console.log("use effect run");
},[]);

  return (
    <div className="home">
      {isPendig && <h1>Loading.....</h1>}
        {/* passing data to other js fle */}
      {blogs && <BlogList blogs={blogs} title={title1} />}
    </div>
  );
}
 
export default Home; 













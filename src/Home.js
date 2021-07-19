import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    
const title1 = "All blogs";  
const [blogs, setBlogs] = useState(null)
const [isPendig,setIsPending] = useState(true);
const [error,setError] = useState(null);

useEffect (()=>{
  setTimeout(() => {
    fetch("http://localhost:8000/blogs")

    .then(res => {
      //if data coudl not reach to the resource from the server
      if(!res.ok){
        throw Error('data didnt reach to the page from server or page not available');
      }
      return res.json();
    })

    .then(data =>{
      console.log(data);
      setBlogs(data);
      setIsPending(false);
    })

    //catch any kind of network error (if we cannot reach the server this fires)
    .catch(err => {
      setIsPending(false);
      //set error message using setError() function, This catch any 'throw Error' property too
      setError(err.message);
    })
  }, 1000);
 },[])


useEffect(()=>{
console.log("use effect run");
},[]);

  return (
    <div className="home">
      {error&&<div>{error}</div>} 
      {isPendig && <h1>Loading.....</h1>}
        {/* passing data to other js fle */}
      {blogs && <BlogList blogs={blogs} title={title1} />}
    </div>
  );
}
 
export default Home; 













import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./usefetch";

const Home = () => {

  const title1 = "All blogs";
  const { data: blogs, isPendig, error } = useFetch('http://localhost:8000/blogs');



  useEffect(() => {
    console.log("use effect run");
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPendig && <h1>Loading.....</h1>}
      {/* passing data to other js fle */}
      {blogs && <BlogList blogs={blogs} title={title1} />}
    </div>
  );
}

export default Home;













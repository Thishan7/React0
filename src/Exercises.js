import { useEffect, useState } from 'react' ;

const Exercises = () => {

    //let name = 'xoxo'
    const[name,setName] = useState('pasindu')
   
    const handleClick1 = () => {
        console.log("hellow!")
    }

    const handleClick2 = (name) => {
        console.log('hellow'+ ' ' + name)
    }

    //changing pasindu by clicking button
    const handleClick3 = () => {
        setName('kamal')
    }

    useEffect(()=>{
        console.log("useEffect ran");
        console.log("name changed!");
    },[name]);

    return ( 
        <div className="Exercises">
            <h2>My Exercise</h2>
            {/* when clicking the button, calls the function. */}
            <button onClick={handleClick1}>Click me!1</button>
            {/* passing arguments to functions */}
            <button onClick={()=>handleClick2('Mario')}>Click me!2</button>
            <p>{name}</p>
            <button onClick={handleClick3}>Change Name</button>
        </div>
     );
}
 
export default Exercises;
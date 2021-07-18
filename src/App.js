
import './App.css';
import Navbar from './Navbar';
import Home from './Home'
import Exercises from './Exercises';

function App() {
  // const title = "This is title";
  // const number = 50;
  // const link = 'http://www.google.com'

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
      <Home></Home>
      <Exercises></Exercises>
         {/* <h1>{title}</h1>
        <h2>{number}</h2>
      <a href={link}>Link to Google</a> */}
       </div>
      
    </div>
    
  );


}

export default App;

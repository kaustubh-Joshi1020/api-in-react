import './App.css';
import {useEffect, useState} from "react";
import { getposts,getprofiles } from './api';
import Postcard from './components/Postcard';
import Usercard from './components/Usercard';
function App() {
  
  const [data,setdata] = useState(null);
  const [userdata,setuserdata] = useState(null);
  
  useEffect(() => {
    getposts().then((posts) => setdata(posts));
   },[])
 
   useEffect(()=> {
    getprofiles().then((user) => setuserdata(user.results[0]));
   },[])

   const refresh = () =>{
    getprofiles().then((user) => setuserdata(user.results[0]));
   }
  //  console.log(userdata);
  
  return (
    <div className="App">
      
      {
      userdata && <Usercard data={userdata}/>
      }
      <button onClick={()=> refresh()}>Refresh</button>

      
      {
        data ? data.map((e) => <Postcard id={e.id} title={e.title} body={e.body} /> ) : <p>data not available</p>
      }

    </div>
  );
}

export default App;

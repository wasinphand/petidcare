// import logo from './logo.svg';
import './css/App.css';
import Home from './components/Home';
import axios from 'axios';
import React,{useEffect,useState} from 'react';

function App() {

  const [pets,setPet] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8000/api/user/').then((res) => {
      console.log('from home ',res.data.pet);
      setPet(res.data.pet);
  },[pets]);

  })
  return (
    <div className="App">
       <Home/>
       {pets.map((pet,i) => <div key={i} style={{paddingLeft:"10%"}}>
         <div style={{"backgroundColor":"white","marginTop":"20px","width":"90%","height":"100px",borderStyle:"solid"}}>
           <div>
           name : {pet.name} 
           </div>
           <div>
          age : {pet.age}
          </div>
          <div>pet type : {pet.petType}</div>
          <div>owner : Mr.Parinphat</div>
         </div>
         </div>)
    }
    </div>
  );
}

export default App;

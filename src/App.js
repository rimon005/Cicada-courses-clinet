import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Watch from './components/Watch/Watch';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      {/* <ExternalUsers></ExternalUsers> */}
      <Watch></Watch>
      
    </div>
  );
}
function Counter (){
  const [count , setCount] = useState(0)
  const increaseCount = ()=> setCount(count + 1)
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increaseCount}>Increase</button>
    </div>
  )
}
function ExternalUsers (){
  const [users , setUsers] = useState([ ]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h2>External Users</h2>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}
function User(props){
  return(
    <div>
      <h3>Name:{props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}
export default App;

import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'

function App() {
  
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://localhost:7133/Restaurang/GetAll')
    .then(response => response.json())
    .then(data => setUsers(data));
    console.log(users);
  },[])


  return (
    <div className="App">

      <table id="customers">
    <tr>
      <th>Namn</th>
      <th>Adress</th>
      <th>Typ</th>
    </tr>

    {
      users.map(user => {
        console.log(user)
        return(
          <tr>
            <td>{user.namn}</td>
            <td>{user.adress}</td>
            <td>{user.typ}</td>
          </tr>
          )
        }
      
      )
    }
    </table>
    </div>
  )
}
  export default App;

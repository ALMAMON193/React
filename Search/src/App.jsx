import { useState } from 'react';
import './App.css';
import { Data } from './components/data';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [query, setQuery] = useState('');
return (
  <div className="container">
    <h2 className='header'>Advance search project</h2>
      
    <input className="form-control" id="myInput" type="text" placeholder="Search.." onChange={(e) => setQuery(e.target.value)} />
    <br />
    <div className="table-responsive">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Address</th>
            <th>CGPA</th>
          </tr>
        </thead>
        <tbody id="myTable">
        {Data.filter((user) => {
       // Specify the properties to search in
        const searchProperties = ['first_name', 'last_name', 'email','gender', 'Address', 'Cgpa'];
        // Convert the values of specified properties to lowercase strings
        const values = searchProperties.map(prop => user[prop]?.toString().toLowerCase());
        // Check if any value includes the query string
        return values.some(value => value?.includes(query.toLowerCase()));
}).map((user, index) => (
  <tr key={index}>
    <td>{user.first_name}</td>
    <td>{user.last_name}</td>
    <td>{user.email}</td>
    <td>{user.gender}</td>
    <td>{user.Address}</td>
    <td>{user.Cgpa}</td>
  </tr>
))}
        </tbody>
      </table>
    </div>
  </div>
);

}

export default App;

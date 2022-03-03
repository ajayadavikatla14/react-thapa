import './App.css';
import Employees from './Employees';

const employees=[
  {
  name:'john',
  id:'12',
  },
  {
    name:'joe',
    id:'12',
    },
]
function App() {
  const {name,id}=employees;
  return (
    <div className="App">
      <header className="App-header">
        {employees.map((employee)=>{
          return (
          <div key={employee.id}>
          <Employees name={employee.name} id={employee.id} />
          </div>
        )})}
      </header>
    </div>
  );
}

export default App;

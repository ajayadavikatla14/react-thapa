import Employee from './Employee';
import './App.css';

const empInfo=[
  {
    name:'joe',
    id:'abc'
  },
  {
    name:'smith',
    id:'xyz'
  }
]
function App() {
  const baseEmp={
    name:'kane',
    id:'nz'
  }
  const emp={...empInfo[0],...baseEmp};
  
  return (
    <div className="App">
      <header className="App-header">
          <div className='App'>
            <Employee {...emp} />
          </div>
      </header>
    </div>
  );
}

export default App;

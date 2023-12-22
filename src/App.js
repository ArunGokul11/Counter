import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="d-flex align-items-center justify-content-center p-5 rounded w-100 flex-column" style={{height:"100vh"}}>
      <div className='d-flex align-items-center justify-content-center p-5 rounded ' style={{backgroundColor:"black"}}>
      <h2 className='' style={{fontWeight:"20px"}} >Counter Application</h2>
    <Counter/>
      </div>
     
    </div>
  );
}

export default App;

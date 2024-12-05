import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {Routes,Route} from 'react-router-dom'
import Edit from './components/Edit';

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/update/:id" element={<Edit></Edit>}></Route>
      </Routes>
    </div>
  );
}

export default App;

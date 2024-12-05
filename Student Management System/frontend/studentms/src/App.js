import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {Routes,Route} from 'react-router-dom'
import EditStudent from './components/EditStudent';
import NewStudent from './components/NewStudent';

function App() {
  return (
    <div>
      

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/edit/:id' element={<EditStudent></EditStudent>}></Route>
        <Route path='/add/student' element={<NewStudent></NewStudent>}></Route>
      </Routes>
    </div>
  );
}

export default App;

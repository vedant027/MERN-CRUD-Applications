import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import {Routes,Route,Navigate} from 'react-router-dom'
// import NavBar from './components/NavBar';
import Home from './Home';
import {Routes,Route} from 'react-router-dom';
import EditForm from './components/EditForm';
import AddTask from './components/AddTask';

function App() {
  return (
    <div>
      <Header></Header>
      <Footer></Footer>

    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/edit/:id" element={<EditForm></EditForm>}></Route>
      <Route path='/add' element={<AddTask></AddTask>}></Route>
    </Routes>

    </div>
  );
}

export default App;

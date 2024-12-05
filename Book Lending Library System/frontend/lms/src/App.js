import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import {Routes,Route} from 'react-router-dom';
import EditBooks from './components/EditBooks'

function App() {
  return (
    <div>
      <Header></Header>
      <Footer></Footer>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/books/update/:id' element={<EditBooks></EditBooks>}></Route>
        <Route path='/add/recipe' element={<EditBooks></EditBooks>}></Route>
      </Routes>

    </div>
  );
}

export default App;

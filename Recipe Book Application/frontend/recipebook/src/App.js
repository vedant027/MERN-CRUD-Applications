import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import NewRecipe from './components/NewRecipe';
import './components/styles.css'
import EditRecipe from './components/EditRecipe';
import Form from './components/Form';

function App() {
  return (
    <div>
      <Header></Header>
      <Footer></Footer>

    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/recipe/add" element={<NewRecipe></NewRecipe>}></Route>
      <Route path='/edit/:id' element={<EditRecipe></EditRecipe>}></Route>
      <Route path='/form' element={<Form></Form>}></Route>
    </Routes>
    </div>

  );
}

export default App;


import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './componant/Header/Header';
import Home from './componant/Home/Home';
import Product from './componant/Product/Product';
import Contact from './componant/Contact/Contact';
import NotFound from './componant/NotFound/NotFound';
import CarDetail from './componant/CarDetail/CarDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>


      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/car/:img' element={<CarDetail></CarDetail>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;

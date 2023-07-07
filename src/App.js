
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './navbar';
import Login from './Login';
import Productdetails from './Productdetails';
import AddProductForm from './Add product';
import Products from './products';

function App() {
  return (
    <div>
      <Navbar/>
     < BrowserRouter>
     <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/product' element={<Products/>}/>
      <Route path='/productsdetails' element={<Productdetails/>}/>
      <Route path='/Addproducts' element={<AddProductForm/>}/>

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

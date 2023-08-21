import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from './reducers/productReducer';
import ProductCard from './components/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Nav';


function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchProduct())
  },[dispatch])

  return (
   <>
   <NavBar/>
   <ProductCard/>
   </>
  
  );
}

export default App;

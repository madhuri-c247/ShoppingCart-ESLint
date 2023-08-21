import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from './reducers/productReducer';
import ProductCard from './components/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Nav';

function App() {
  const dispatch = useDispatch();
  const isError = useSelector((state) => state.product.isError);
  const isLoading = useSelector((state) => state.product.isLoading);

  useEffect(() => {
    dispatch(fetchProduct())
  }, [dispatch])

  return (
    <>
      {isError ? 'Having issue with Data' :
        <>
          <NavBar />
          {isLoading ? 'Loading...' : <ProductCard />}
        </>}
    </>
  );
}

export default App;

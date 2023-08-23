import { useEffect } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../reducers/productReducer';
import ProductCard from './ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Nav';
import React from 'react'; 
import { AppDispatch, RootState } from '../store/store';

function Home(){
     const useAppDispatch: () => AppDispatch = useDispatch;
     const dispatch = useAppDispatch()
     const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
  const isError = useAppSelector((state) => state.product.isError);
  const isLoading = useAppSelector((state) => state.product.isLoading);

  useEffect(() => {
    dispatch(fetchProduct())
  }, [dispatch])

  return (
    <>
      {isError ? 'Having issue with Data' :
        <>
          <NavBar/>
          {isLoading ? 'Loading...' : <ProductCard/>}
        </>}
    </>
  );
}

export default Home;
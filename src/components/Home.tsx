import React, { useEffect } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import { fetchProduct } from '../reducers/productReducer';
import ProductCard from './ProductCard';
import NavBar from './Nav';
//services
import { AppDispatch, RootState } from '../store/store';

function Home() {
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const isError = useAppSelector((state) => state.product.isError);
  const isLoading = useAppSelector((state) => state.product.isLoading);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <>
      {isError ? <h1>Having issue with Data</h1> :
        <>
          <NavBar />
          {isLoading ? <h1>Loading...</h1>: <ProductCard />}
        </>}
    </>
  );
}

export default Home;
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../Redux/Slice.js"; // Adjust path based on your folder structure

const useFetchProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
};

export default useFetchProducts;

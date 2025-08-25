import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../../Redux/DrugsFetchingSlice.js";

const useFetchProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
};

export default useFetchProducts;

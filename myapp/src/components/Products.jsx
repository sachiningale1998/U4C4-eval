import React, { useEffect } from "react";
import { Select } from "./Styled";
import {Grid} from "../components/Styled";
import { getProductsData } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";



export const Products = () => {
  const dispatch= useDispatch();
  let product = useSelector(state=> state.products)
  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
    getProductsData(dispatch)
  }, []);
  const handleSort = (e) => {
    // dispatch sort products on change
  };
  return (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container">
        {/* iterate data and show each POroduct card */}
      </Grid>
    </>
  );
};

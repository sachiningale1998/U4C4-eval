// use axios for api call
import axios from "axios";
import {GET_PRODUCTS_DATA} from "./actionTypes"

async function getProductsData(dispatch) {

let res= await axios.get(`https://movie-fake-server.herokuapp.com/products`);
    let data=await res.data;
   
        dispatch ({
            type: GET_PRODUCTS_DATA,
            payload : data,
        })

}

const sortProducts = () => {};

const filterProducts = () => {};

export { getProductsData, sortProducts, filterProducts };



/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"
import { useDispatch} from "react-redux";

// import { fetchProduct } from "../../Redux/slices/productSlice";
import { addToCart } from "../../Redux/slices/cartSlice";
// import { useEffect } from "react";
import Img from "../lezylodeimg/Img";
const Product = (props) => {
    const {product,showButton} =props
    // add to cart
 
    const dispach = useDispatch();
    // useEffect(() => {
    //   dispach(fetchProduct());
    // }, []);
  return (
    <>
     <div className="card" style={{background:"#000", width:"220px" ,padding:"10px"}}>
       
     {/* <img style={{width:"200px", height:"233px" ,}} src={product.image} alt="" /> */}
    <Img className="imge" src={product.image}/>
     
        <span>{product.rate}</span>
        <p>Price:{product.price}</p>
        {showButton &&  <Link to={`/product/${product.id}`} style={{textDecoration:"none"}}>ditilse</Link>}
      
        <button onClick={() => dispach(addToCart(product))}>add</button>








     </div>



        </>
  )
}

export default Product
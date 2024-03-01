/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../../Redux/slices/cartSlice";

import Img from "../lezylodeimg/Img";
const Product = (props) => {
  const { product, showButton } = props;
  // add to cart

  const dispach = useDispatch();

  return (
    <>
      <div className="card" style={{ width: "220px", padding: "10px" }}>
        <Img className="imge" src={product.image} />

        <span>{product.rate}</span>
        <p>Price:{product.price}$</p>
        {showButton && (
          <Link
            to={`/product/${product.id}`}
            style={{ textDecoration: "none" }}
          >
            ditilse
          </Link>
        )}

        <button onClick={() => dispach(addToCart(product))}>add</button>
      </div>
    </>
  );
};

export default Product;

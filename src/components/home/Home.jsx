import "./Home.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../../Redux/slices/productSlice";
// import { addToCart } from "../../Redux/slices/cartSlice";
import ProductList from "../produuctList/ProductList";
import Hero from "./Hero";

const Home = () => {
  const products = useSelector((state) => state.products);
  console.log(products);
  const dispach = useDispatch();

  useEffect(() => {
    dispach(fetchProduct());
  }, []);

  return (
    <div className="section">
      {/* <div className="cart" >
        {products.map((product) => (
            <div className="box" key={product.id} >
              <img src={product.image} style={{ width: "200px" }} />
              <div>
                <div>{product.title}</div>
                <p>{product.price}</p>
                <button
                  onClick={() => dispach(addToCart(product))}>
                  addToCart
                </button>
              </div>
            </div>
        
        ))} */}
        {/* <Hero/> */}
        <ProductList/>
      </div>
    // </div>
  );
};

export default Home;

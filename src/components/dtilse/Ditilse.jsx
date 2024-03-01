import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Product from "../product/Product";
import Img from "../lezylodeimg/Img";

const Ditilse = () => {




  const prams = useParams();
  console.log(prams);
  const [product, setproduct] = useState([]);
  useEffect(() => {
    const fechProduct = async () => {
      try {
        const products = await axios.get(
          `https://fakestoreapi.com/products/${prams.productId}`
        );
      setproduct(products.data);
        console.log(product.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fechProduct();
  }, []);
 

  return (
    <div style={{marginTop:"5rem"}}>

        <div>
            <Img src={product.image} className="imgDitilse"/>   
      
      
      
      
      <h2>Price:  {product.price}$</h2>
      <h3>Title : {product.title}</h3>
      <h6>description: {product.description}</h6>
        </div>

   
    
    

   
  

      {/* <Product product={product} showButton={false} /> */}

    </div>
  );
};

export default Ditilse;

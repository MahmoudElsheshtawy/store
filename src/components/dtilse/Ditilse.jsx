import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Product from "../product/Product";
import Img from "../lezylodeimg/Img";
import './Ditilse.css'
// import BeatLoader from "react-spinners/BeatLoader";

const Ditilse = () => {
  const [loading, setLoding] = useState(false);

  useEffect(() => {
    setLoding(true);
    setTimeout(() => {
      setLoding(false);
    }, 500);
  }, []);
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
    <>
      {loading ? (
        //     <BeatLoader
        //    color={"#aaa"}
        //    loading={loading}
        //   //  cssOverride={override}
        //    size={150}

        //    aria-label="Loading Spinner"
        //    data-testid="loader"
        //  />
        <div className="detailsBannerSkeleton">
          {/* <ContentWrapper> */}
          <div className="left skeleton "></div>
          <div className="right ">
            <div className="row skeleton"></div>
            <div className="row skeleton"></div>
            <div className="row skeleton"></div>
            <div className="row skeleton"></div>
            {/* <div className="row skeleton"></div>
            <div className="row skeleton"></div> */}
         
          </div>
          {/* </ContentWrapper> */}
        </div>
      ) : (
        <div className="ditilse-section" style={{ marginTop: "5rem" }}>
          <div className="left-img">
            <Img src={product.image} className="imgDitilse" />
          </div>
          <div className="right-info" >
            <h2>Price: {product.price}$</h2>
            <h3>Title : {product.title}</h3>
            <h6>description: {product.description}</h6>
          </div>
          {/* <Product product={product} showButton={false} /> */}
        </div>
      )}
    </>
  );
};

export default Ditilse;

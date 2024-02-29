import "./Home.css"

import ProductList from "../produuctList/ProductList";
import Hero from "./Hero";


const Home = () => {


  return (
    <div className="section">

        <Hero/>
        <ProductList/>
      </div>
  
  );
};

export default Home;

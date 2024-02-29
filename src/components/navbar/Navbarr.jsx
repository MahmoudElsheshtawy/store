// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";
import { CgShoppingCart } from "react-icons/cg";

const Navbarr = () => {
  const [scrolled, setScroll] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 110) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  // const { cartQuntity } = useShoppingCart();

  const cart = useSelector((state) => state.cart);
  // console.log(cart);
  return (
    <>
      <div
        id="Navbar"
        className={`contanerr ${scrolled ? "stiky-header" : ""}`}
      >
        <div className="center">
          <a href="#" style={{ textDecoration: "none", color: "#fff" }}>
            <span>Sh Store</span>
          </a>
        </div>

        <div className="right-nav">
          {/* <AiOutlineSearch className='icon'/> */}
          {/* <AiOutlineHeart  className='icon'/> */}
          <div className="cart-nav">
            <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
              Home
            </Link>
            <Link
              style={{ textDecoration: "none", color: "#fff" }}
              className="icon"
              to="/cart"
            >
              <CgShoppingCart />
              {cart.length}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbarr;

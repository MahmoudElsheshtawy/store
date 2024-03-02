/* eslint-disable react/no-unknown-property */

import "./Home.css";
const Hero = () => {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade h-60vh"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div className="carousel-item active hero">
            <div className="right">rrrr</div>
            <div className="left">
              <img
                style={{ hight: "60vh" }}
                src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wqHR?ver=1b58"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <div className="carousel-item">
            <img
              style={{ hight: "60vh" }}
              src="https://images.pexels.com/photos/2845173/pexels-photo-2845173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              style={{ hight: "60vh" }}
              src="https://images.pexels.com/photos/18104860/pexels-photo-18104860/free-photo-of-pelican-flying-over-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;

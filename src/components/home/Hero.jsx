/* eslint-disable react/no-unknown-property */

import "./Home.css";
const Hero = () => {
  return (
   <>
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wqHR?ver=1b58" class="d-block w-100 h-75" alt="..."/>
      </div>
      <div class="carousel-item">
      <img src="https://images.pexels.com/photos/19723235/pexels-photo-19723235/free-photo-of-snake-in-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100 h-75" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
      <div class="carousel-item">
        <img src="https://images.pexels.com/photos/19055373/pexels-photo-19055373/free-photo-of-black-and-white-photo-of-zebras.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" class="d-block w-100 h-75" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
   </>
  );
};

export default Hero;

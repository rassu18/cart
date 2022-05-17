import React from 'react';
import Products from './products'

const Home = () => {
  return (
    <div className='hero'>
        <div className="card bg-dark text-white broder-0">
     <img src="/assets/kritin.jpg" className="card-img" alt="background" height='550px' />
     <div className="card-img-overlay d-flex flex-column justify-content-center">
     <div className="container">
    <h5 className="card-title display-3 font-bolder mb-0">New Session Arrivals</h5>
    <p className="card-text lead fs-2">Check out all the trandes</p>
  </div>
     </div>
  
</div>
    <Products />
    </div>
    );
  }
  
  export default Home;
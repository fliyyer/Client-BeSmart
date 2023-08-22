import React from "react";
import Jacket from "../../assets/image/jaketBeSmart.png";

function Product() {
  return (
    <section className="feature-product pt-50 pb-50">
        <div className="container">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
          Feature Product
        </h2>
        <div className="products">
          <div className="product">
            <div className="image">
              <img src={Jacket} alt="" />
            </div>
            <div className="namePrice">
              <h3>earphone</h3>
              <span>$ 15.99</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
            <div className="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <div className="bay">
              <button> Buy now </button>
            </div>
          </div>
          <div className="product">
            <div className="image">
              <img src={Jacket} alt="" />
            </div>
            <div className="namePrice">
              <h3>earphone</h3>
              <span>$ 15.99</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
            <div className="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <div className="bay">
              <button> Buy now </button>
            </div>
          </div>
          <div className="product">
            <div className="image">
              <img src={Jacket} alt="" />
            </div>
            <div className="namePrice">
              <h3>earphone</h3>
              <span>$ 15.99</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
            <div className="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <div className="bay">
              <button> Buy now </button>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
}

export default Product;

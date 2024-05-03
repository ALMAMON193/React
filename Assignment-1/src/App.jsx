import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Product, CardHeader, CardUpcoming } from "./components/Card";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from 'react'


const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
];

let item = [];
for (let i = 0; i < products.length; i++) {
  item.push(
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={products[i].image} className="card-img" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{products[i].title}</h5>
            <p className="card-text">{products[i].description}</p>
            <p className="card-text">
              <small className="text-muted">
                {products[i].category}
                <br />
                {products[i].rating.rate}
                <br />
                {products[i].rating.count}

              </small>
            </p>
          </div>
        </div>
        </div>
        </div>
)}

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-3 module-card-1">
              <div className="row no-gutters">
                <div className="col-md-3">
                  <h1 className="module-section">
                    <div className="card module">
                      <CardUpcoming Name="Module" number="1" />
                    </div>
                  </h1>
                </div>
                <div className="col-md-9">
                  <div className="row right-module-1">
                    <div className="col-3">
                      <button className="btn btn-light btn-sm">
                        {" "}
                        <CardUpcoming Date="5-2-24" />
                      </button>
                    </div>
                    <div className="col-6">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          25%
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <CardUpcoming dateOfWeek="5/7 Expired" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <CardUpcoming desc="(Reward Module) Mastering Git...." />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3 module-card-1">
              <div className="row no-gutters">
                <div className="col-md-3">
                  <h1 className="module-section">
                    <div className="card module">
                      <CardUpcoming Name="Module" number="1" />
                    </div>
                  </h1>
                </div>
                <div className="col-md-9">
                  <div className="row right-module-1">
                    <div className="col-9">
                      <h3>
                        <CardUpcoming preeRecord="Pree-recorded Video" />
                      </h3>
                      <p>
                        <CardUpcoming numbersOfVideo="980 videos" />
                      </p>
                    </div>
                    <div className="col-3">
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <CardHeader />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Product />
          </div>
          <div className="col-md-6">
            <Product />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

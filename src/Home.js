import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_NP._CB657651956_.jpg"
          alt="lol"
        />
        <div className="home_row">
          <Product
            id="1000"
            title="OPPO Reno (Jet Black, 8GB RAM, 128 GB Storage)"
            price="349.99"
            image="https://m.media-amazon.com/images/I/81k8R2Z8nWL._AC_UL480_FMwebp_QL65_.jpg"
            rating={3}
          />
          <Product
            id="1001"
            title="New Apple iPhone 12 Pro (128GB) - Pacific Blue"
            price="699.99"
            image="https://images-na.ssl-images-amazon.com/images/I/71DVgBTdyLL._SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="1002"
            title="JBL Pulse 3 Wireless Bluetooth IPX7 Waterproof Speaker (Black)"
            price="59.99"
            image="https://images-na.ssl-images-amazon.com/images/I/71XRDYZChLL._SL1500_.jpg"
            rating={3}
          />
          <Product
            id="1003"
            title="Sony WH-1000XM4 Industry Leading Wireless Noise Cancelling Headphones"
            price="349.99"
            image="https://images-na.ssl-images-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg"
            rating={5}
          />
          <Product
            id="1004"
            title="JBL Pulse 4 Portable Bluetooth Speaker with 360-Degree LED Lightshow"
            price="69.99"
            image="https://images-na.ssl-images-amazon.com/images/I/61HXIajZwhL._SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="1005"
            title="OnePlus U Series 138.8 cm (55 inches) 55U1 Series 4K Ultra HD LED"
            price="599.99"
            image="https://images-na.ssl-images-amazon.com/images/I/71de4PH0BnL._SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

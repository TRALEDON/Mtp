import React from "react";
import "./App.css"
import im from "./assets/image.png"
const products = [
  { name: "Mars rug", price: 100, mavjud: "24 dona mavjud", image: im },
  { name: "Keyboard sticker", price: 49, mavjud: "10 dona mavjud", image: im},
  { name: "Smart watch", price: 899, mavjud: "4 dona mavjud" , image: im},
  { name: "Wireless keyboard", price: 350, mavjud: "9 dona mavjud" , image: im},
  { name: "Mouse", price: 359, mavjud: "24 dona mavjud" , image: im},
  { name: "AirPods", price: 499, mavjud: "11 dona mavjud" , image: im},
  { name: "Powerbank", price: 899, mavjud: "4 dona mavjud" , image: im},
  { name: "USB flash drive", price: 299, mavjud: "21 dona mavjud" , image: im},
  { name: "Smartphone", price: 3699, mavjud: "2 dona mavjud" , image: im},
  { name: "PlayStation 5", price: 7499, mavjud: "1 dona mavjud" , image: im},
  { name: "Yandex Station", price: 1999, mavjud: "4 dona mavjud" , image: im},
  { name: "Samsung Planet", price: 4499, mavjud: "24 dona mavjud" , image: im},
];

function App() {
  return (
    <div className="list">
      <div className="ota">
        {products.map((item, index)=>(
          <div className="card" key={index}>
            <img src={item.image} alt="" className="img"/>
            <h1>Nomi: {item.name}</h1>
            <p>Coin: {item.price}</p>
            <p>Mavjud: {item.mavjud}</p>
            <div className="card">
  <i></i><i></i><i></i>
</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
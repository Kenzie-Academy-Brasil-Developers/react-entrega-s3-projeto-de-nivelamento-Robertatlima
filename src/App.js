import { useState } from "react";
import "./App.css";
import Register from "./components/Register";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    {
      code: 10,
      name: "Smart TV Led 50 Semp",
      description:
        "SK8300 4K HDR Android Wi-Fi 3 HDMI 2 USB Controle Remoto com atalhos Chromecast Integrado",
      price: 2299.99,
      discount: 190.99,
    },
    {
      code: 11,
      name: "Smartphone Samsung Galaxy A72 128GB",
      description:
        "4G Wi-Fi Tela 6.7 Dual Chip 6GB RAM Câmera Quádrupla + Selfie 32MP - Preto",
      price: 1988.4,
      discount: 87.89,
    },
    {
      code: 12,
      name: "Smartwatch Samsung Galaxy Watch Active",
      description:
        "4O Galaxy Watch Active é o smartwatch ideal para quem tem um estilo de vida ativo e saudável. Ele é leve, confortável e monitora diariamente suas atividades físicas, e os comportamentos de nível de stress e sono",
      price: 678.6,
      discount: 110.19,
    },
  ]);

  const productAddCart = (id) => {
    const cartAdd = products.find((product) => product.code === id);
    setCart([...cart, cartAdd]);
    console.log("Add cart", cartAdd);
  };
  const productRemoveCart = (id) => {
    const cartRemove = cart.filter((product) => product.code !== id);
    setCart(cartRemove);
    console.log("Remove cart", cartRemove);
  };
  return (
    <div className="App">
      <div className="topo">
        <p>
          Total: R$
          {cart.reduce((acc, atual) => acc + (atual.price - atual.discount), 0)}
        </p>
        Valor economizado: R${" "}
        <p>{cart.reduce((acc, atual) => acc + atual.discount, 0)}</p>
      </div>
      <header className="App-header">
        <Register products={products} setProducts={setProducts} />
        <Product products={products} productAddCart={productAddCart} />
        <Cart cart={cart} productRemoveCart={productRemoveCart} />
      </header>
    </div>
  );
}

export default App;

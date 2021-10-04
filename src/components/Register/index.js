import "./style.css";
import { useState } from "react";
const Register = ({ products, setProducts }) => {
  const [addProduct, setAddProduct] = useState({
    code: 0,
    name: "",
    description: "",
    price: 0,
    discount: 0,
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Codigo do produto"
        onChange={(event) =>
          setAddProduct({
            code: event.target.value,
            name: addProduct.name,
            description: addProduct.description,
            price: addProduct.price,
            discount: addProduct.discount,
          })
        }
      />
      <input
        type="text"
        placeholder="Nome do produto"
        onChange={(event) =>
          setAddProduct({
            code: addProduct.code,
            name: event.target.value,
            description: addProduct.description,
            price: addProduct.price,
            discount: addProduct.discount,
          })
        }
      />
      <input
        type="text"
        placeholder="Descrição do produto"
        onChange={(event) =>
          setAddProduct({
            code: addProduct.code,
            name: addProduct.name,
            description: event.target.value,
            price: addProduct.price,
            discount: addProduct.discount,
          })
        }
      />
      <input
        type="text"
        placeholder="Preço do produto"
        onChange={(event) =>
          setAddProduct({
            code: addProduct.code,
            name: addProduct.name,
            description: addProduct.description,
            price: event.target.value,
            discount: addProduct.discount,
          })
        }
      />
      <input
        type="text"
        placeholder="Desconto do produto"
        onChange={(event) =>
          setAddProduct({
            code: addProduct.code,
            name: addProduct.name,
            description: addProduct.description,
            price: addProduct.price,
            discount: event.target.value,
          })
        }
      />
      <button onClick={() => setProducts([...products, addProduct])}>
        Cadastrar produto
      </button>
    </div>
  );
};

export default Register;

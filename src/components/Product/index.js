import "./style.css";
const Product = ({ products, productAddCart }) => {
  return (
    <>
      <ul className="products">
        {products.map((product, index) => {
          return (
            <li key={index}>
              <h5>{product.name}</h5>
              <p>{product.description}</p>
              <span>De: R${product.price}</span>
              <p className="valor">
                Por: R$ {product.price - product.discount}
              </p>
              <button onClick={() => productAddCart(product.code)}>
                Adicionar produto
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Product;

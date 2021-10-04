import "./style.css";
const Cart = ({ cart, productRemoveCart }) => {
  return (
    <div className="cart">
      <h3>Carrinho de compras:</h3>
      <ul>
        {cart.map((product, index) => {
          return (
            <li key={index}>
              <h5>{product.name}</h5>
              <p>{product.description}</p>
              <span>De: R${product.price}</span>
              <p className="valor">
                Por: R$ {product.price - product.discount}
              </p>
              <button onClick={() => productRemoveCart(product.code)}>
                Remover produto
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Cart;

import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Container, Table, Button } from 'react-bootstrap';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container className="mt-5">
      <h2>Seu Carrinho</h2>
      {cartItems.length === 0 ? (
        <p>Carrinho vazio</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Qtd</th>
                <th>Preço</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>R$ {(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <Button size="sm" variant="danger" onClick={() => removeFromCart(item.id)}>
                      Remover
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h4>Total: R$ {total.toFixed(2)}</h4>
          <Button variant="success" className="me-2">Finalizar Compra</Button>
          <Button variant="secondary" onClick={clearCart}>Limpar Carrinho</Button>
        </>
      )}
    </Container>
  );
};

export default Cart;

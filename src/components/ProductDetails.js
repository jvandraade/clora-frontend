import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return <Container className="mt-5"><h2>Produto não encontrado</h2></Container>
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={product.image} />
          </Card>
        </Col>
        <Col md={6}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h4>R$ {product.price.toFixed(2)}</h4>
          <p>Categoria: {product.category}</p>
          <p>Estoque: {product.stock}</p>
          <Button variant="success" className="me-2" onClick={() => addToCart(product)}>
                Add to Cart
            </Button>
          <Button variant="secondary" onClick={() => navigate(-1)}>Voltar</Button>
        </Col>
      </Row>
    </Container>
  )
};

export default ProductDetails;

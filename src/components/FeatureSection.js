import { Container, Row, Col } from 'react-bootstrap';
import { FaLeaf, FaTruck, FaMedal } from 'react-icons/fa';

export default function FeatureSection() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row>
          <Col md={4} className="text-center">
            <FaLeaf size={40} className="mb-3 text-success" />
            <h5>Organic Products</h5>
            <p>Carefully selected and 100% organic medicinal products.</p>
          </Col>
          <Col md={4} className="text-center">
            <FaTruck size={40} className="mb-3 text-success" />
            <h5>Fast Delivery</h5>
            <p>Quick and discreet delivery to your door.</p>
          </Col>
          <Col md={4} className="text-center">
            <FaMedal size={40} className="mb-3 text-success" />
            <h5>Premium Quality</h5>
            <p>Top-rated products ensuring the best experience.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <img src="/images/logo-clora.png" alt="Clora" width="120" />
            <p className="mt-2">Bem-estar e saúde natural com cannabis medicinal certificada.</p>
          </Col>
          <Col md={2}>
            <h5>Páginas</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/shop">Shop</a></li>
              <li><a href="/about">Sobre Nós</a></li>
              <li><a href="/contact">Contato</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contato</h5>
            <p>E-mail: contato@clora.com</p>
            <p>Tel: (11) 99999-9999</p>
            <p>Seg-Sex: 09h–18h</p>
          </Col>
          <Col md={3}>
            <h5>Newsletter</h5>
            <Form>
              <Form.Group className="mb-2" controlId="newsletterEmail">
                <Form.Control type="email" placeholder="Digite seu e-mail" />
              </Form.Group>
              <Button variant="success">Cadastrar</Button>
            </Form>
            <div className="social-icons mt-3">
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <small>© {new Date().getFullYear()} Clora. Todos os direitos reservados.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Newsletter() {
  return (
    <Container fluid className="bg-light py-5 mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <h4 className="text-center mb-3">Assine nossa Newsletter</h4>
          <p className="text-center mb-4">Receba novidades, artigos do nosso blog e promoções exclusivas sobre cannabis medicinal.</p>
          <Form className="d-flex">
            <Form.Control
              type="email"
              placeholder="Digite seu e-mail"
              className="me-2"
            />
            <Button variant="success">Cadastrar</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

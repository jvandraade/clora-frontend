import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">Entre em Contato</h2>

      <Row className="mb-5">
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Digite seu nome" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" placeholder="Digite seu e-mail" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSubject">
              <Form.Label>Assunto</Form.Label>
              <Form.Control type="text" placeholder="Assunto da mensagem" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Mensagem</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Escreva sua mensagem" />
            </Form.Group>

            <Button variant="success" type="submit">Enviar</Button>
          </Form>
        </Col>

        <Col md={6}>
          <div className="mb-3">
            <FaMapMarkerAlt className="me-2 text-success" /> <strong>Endereço:</strong> Rua Verde, 123 - São Paulo, SP
          </div>
          <div className="mb-3">
            <FaEnvelope className="me-2 text-success" /> <strong>E-mail:</strong> contato@clora.com
          </div>
          <div className="mb-3">
            <FaPhoneAlt className="me-2 text-success" /> <strong>Telefone:</strong> (11) 99999-9999
          </div>

          <div className="mt-4">
            <h5>Siga-nos:</h5>
            <a href="https://instagram.com" className="me-3 text-success fs-4"><FaInstagram /></a>
            <a href="https://facebook.com" className="me-3 text-success fs-4"><FaFacebook /></a>
            <a href="https://wa.me/5511999999999" className="me-3 text-success fs-4"><FaWhatsapp /></a>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <iframe
            title="Mapa Clora"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.574648074892!2d-46.65329668446358!3d-23.5880936683065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c64cb7d1d1%3A0xdea7b33c8b8a0ec5!2sAv.%20Paulista%20-%20São%20Paulo%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1615334993611!5m2!1spt-BR!2sbr"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
}

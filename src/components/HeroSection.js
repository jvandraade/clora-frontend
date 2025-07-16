import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import "../styles/HeroSection.css"; 
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-image.png"

export default function HeroSection() {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <motion.h1 
              initial={{ opacity: 0, y: -30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }}>
              Clora — Bem-estar Natural com Cannabis Medicinal
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.5, duration: 1 }}>
              Descubra como nossos produtos à base de cannabis medicinal podem transformar sua saúde de forma segura, legal e natural.
            </motion.p>
            <div className="hero-buttons">
              <Link to="/shop" className="stretched-link">
                <Button variant="success" size="lg" className="me-3">Ver Produtos</Button>
              </Link>
              <Button variant="outline-light" size="lg">Saiba Mais</Button>
            </div>
            <div className="hero-badges mt-3">
              <Badge bg="light" text="dark">100% Natural</Badge>{' '}
              <Badge bg="light" text="dark">Certificado ANVISA</Badge>{' '}
              <Badge bg="light" text="dark">+2000 Clientes Satisfeitos</Badge>
            </div>
            <div className="hero-testimonials mt-4">
              <p><em>"Produto mudou minha qualidade de vida!"</em> — Ana, 42 anos</p>
              <p><em>"Uso diário, recomendo demais."</em> — Carlos, 35 anos</p>
            </div>
          </Col>
          <Col md={6}>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1.2 }}
            >
            <img 
            src={heroImage}
            alt="Produtos Clora"
            className="img-fluid floating"
            />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

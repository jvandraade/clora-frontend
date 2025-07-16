import React, { useState } from "react";
import { Container, Row, Col, Form, ButtonGroup, Button } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import ProductDetailsModal from "../components/ProductDetailsModal";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.png";

const products = [
  { id: 1, name: "Clora Relax Oil 500mg", image: product1 , shortDescription: "Óleo CBD para relaxamento.", description: "Ajuda a reduzir a ansiedade e melhora o sono.", category: "Relaxamento" },
  { id: 2, name: "Clora Pain Relief Cream", image: product2, shortDescription: "Creme tópico para dores.", description: "Alívio de dores musculares e inflamações.", category: "Alívio da Dor" },
  { id: 3, name: "Clora Pet Care Drops", image: product3, shortDescription: "Gotas para pets.", description: "Ansiedade e dores em pets.", category: "Pets" },
  { id: 4, name: "Clora Energy Gummies", image: product4, shortDescription: "Gummies energizantes.", description: "Mais disposição com CBD e B12.", category: "Energizante" },
];

const categories = ["Todos", ...new Set(products.map(p => p.category))];

export default function Shop() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProducts = selectedCategory === "Todos"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <Container>
      <h1 className="my-4">Nossa Loja</h1>

      <ButtonGroup className="mb-4">
        {categories.map(category => (
          <Button
            key={category}
            variant={selectedCategory === category ? "success" : "outline-success"}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </ButtonGroup>

      <Row>
        {filteredProducts.map(product => (
          <Col md={3} key={product.id} className="mb-4">
            <ProductCard product={product} onViewDetails={setSelectedProduct} />
          </Col>
        ))}
      </Row>

      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          onHide={() => setSelectedProduct(null)}
        />
      )}

      <section className="mt-5">
        <h2>O que dizem nossos clientes</h2>
        <Row className="gy-4">
          {[
            { name: "Ana P.", avatar: "👩", text: "Uso o Relax Oil toda noite e durmo muito melhor!" },
            { name: "João M.", avatar: "👨", text: "O creme para dores é excelente, alivia minhas dores lombares." },
            { name: "Clara S.", avatar: "👱‍♀️", text: "Minhas gatas estão muito mais calmas com as gotas." },
            { name: "Diego F.", avatar: "🧑‍💼", text: "As gummies são ótimas antes do trabalho, sinto mais disposição." },
            { name: "Paula R.", avatar: "👩‍⚕️", text: "Atendimento excelente, entrega rápida e produto de qualidade." }
          ].map((c, idx) => (
            <Col md={4} key={idx}>
              <div className="p-3 bg-light rounded-3 shadow-sm">
                <div className="d-flex align-items-center mb-2">
                  <div className="me-2 fs-3">{c.avatar}</div>
                  <strong>{c.name}</strong>
                </div>
                <div className="fst-italic text-secondary">“{c.text}”</div>
              </div>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
}

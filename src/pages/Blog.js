import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ansiedade from "../assets/ansiedade.jpg";
import cdb from "../assets/cdb.jpg";
import cronicas from "../assets/cronicas.png";
import remedios from "../assets/remedios.png";

const blogPosts = [
  {
    id: 1,
    title: "Benefícios da Cannabis Medicinal no Tratamento da Ansiedade",
    image: ansiedade,
    summary: "Descubra como o uso responsável da cannabis medicinal pode ajudar a reduzir sintomas de ansiedade e melhorar a qualidade de vida."
  },
  {
    id: 2,
    title: "O que é o CBD? Entenda tudo sobre esse composto natural",
    image: cdb,
    summary: "Saiba mais sobre o canabidiol (CBD), seu potencial terapêutico e como ele atua no organismo humano."
  },
  {
    id: 3,
    title: "Uso medicinal da cannabis em doenças crônicas",
    image: cronicas,
    summary: "Entenda de que forma a cannabis medicinal vem sendo utilizada como aliada no controle de dores crônicas e doenças autoimunes."
  },
  {
    id: 4,
    title: "Diferentes formas de consumo: óleo, cápsulas e cosméticos",
    image: remedios,
    summary: "Veja quais são as principais formas de uso da cannabis medicinal e as vantagens de cada método."
  }
];

export default function Blog() {
  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">Blog Clora - Conteúdo Especial para Você</h2>
      <Row>
        {blogPosts.map(post => (
          <Col md={6} lg={4} key={post.id} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img 
                variant="top" 
                src={post.image} 
                style={{ height: "200px", objectFit: "cover" }} 
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.summary}</Card.Text>
                <Link to={`/blog/${post.id}`} className="stretched-link">
                  <Button
                    variant="success"
                    className="mt-auto"
                    onClick={() => alert(`Abrir post completo: ${post.title}`)}
                  >
                    Ver mais
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

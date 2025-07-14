import { Container, Row, Col, Card, Button, Accordion, Image } from "react-bootstrap";
import { FaLeaf, FaHeartbeat, FaHandHoldingMedical, FaHistory, FaSmile, FaQuestionCircle, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const teamMembers = [
  { name: "Dra. Ana Silva", role: "Farmacêutica", photo: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "Dr. Carlos Menezes", role: "Especialista em Cannabis Medicinal", photo: "https://randomuser.me/api/portraits/men/45.jpg" },
  { name: "Marina Lopes", role: "Consultora de Produtos", photo: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Lucas Pereira", role: "Responsável pelo Atendimento", photo: "https://randomuser.me/api/portraits/men/65.jpg" }
];

const faqs = [
  { question: "O que é cannabis medicinal?", answer: "É o uso da planta cannabis para fins terapêuticos, auxiliando no tratamento de diversas doenças." },
  { question: "Os produtos são legalizados?", answer: "Sim, todos os produtos Clora seguem a legislação vigente e passam por rigorosos controles de qualidade." },
  { question: "Como utilizar os produtos corretamente?", answer: "Cada produto vem com instruções específicas e recomendamos sempre acompanhamento médico." },
  { question: "Posso comprar sem receita médica?", answer: "Dependendo do produto, alguns requerem receita; nossa equipe pode ajudar a esclarecer dúvidas." }
];

export default function About() {
  return (
    <Container className="my-5">
      {/* Quem somos */}
      <Row className="mb-5 align-items-center">
        <Col md={6}>
          <h2>Quem somos</h2>
          <p>
            A <strong>Clora</strong> nasceu para levar saúde e qualidade de vida por meio do uso medicinal da cannabis, trazendo produtos seguros, eficazes e inovadores.
          </p>
          <p>
            Nosso time multidisciplinar é dedicado a cuidar do seu bem-estar, respeitando todas as normas e oferecendo o melhor atendimento.
          </p>
        </Col>
        <Col md={6}>
          <Image src="https://images.unsplash.com/photo-1588776814546-f924eb0953f8?auto=format&fit=crop&w=600&q=80" rounded fluid />
        </Col>
      </Row>

      {/* Missão & Valores */}
      <Row className="text-center mb-5">
        <Col>
          <h3>Nossa missão & valores</h3>
        </Col>
      </Row>
      <Row className="mb-5 text-center">
        <Col md={4}>
          <Card className="p-3 shadow-sm border-0">
            <FaHeartbeat size={40} className="text-success mb-3" />
            <Card.Title>Saúde & Bem-estar</Card.Title>
            <Card.Text>Oferecer soluções naturais que melhorem a qualidade de vida dos nossos clientes.</Card.Text>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3 shadow-sm border-0">
            <FaLeaf size={40} className="text-success mb-3" />
            <Card.Title>Responsabilidade</Card.Title>
            <Card.Text>Atuar com ética, qualidade e segurança, respeitando as normas da medicina canábica.</Card.Text>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3 shadow-sm border-0">
            <FaHandHoldingMedical size={40} className="text-success mb-3" />
            <Card.Title>Inovação</Card.Title>
            <Card.Text>Investir em pesquisa para sempre trazer novas soluções terapêuticas.</Card.Text>
          </Card>
        </Col>
      </Row>

      {/* Benefícios */}
      <Row className="mb-5 align-items-center">
        <Col md={6}>
          <h3>Por que o uso medicinal?</h3>
          <ul>
            <li>Auxilia no tratamento de dores crônicas</li>
            <li>Reduz ansiedade e melhora o sono</li>
            <li>Ajuda no controle de convulsões</li>
            <li>Melhora o bem-estar geral</li>
          </ul>
        </Col>
        <Col md={6}>
          <Image src="https://images.unsplash.com/photo-1588776814389-cd4a7c5d8f2c?auto=format&fit=crop&w=600&q=80" rounded fluid />
        </Col>
      </Row>

      {/* História */}
      <Row className="text-center mb-5">
        <Col>
          <h3>Nossa história</h3>
          <Card className="p-4 shadow-sm mx-auto mt-3" style={{ maxWidth: "700px" }}>
            <FaHistory size={40} className="text-success mb-3" />
            <Card.Text>
              Fundada em 2020, a Clora surgiu do sonho de oferecer alternativas naturais que realmente façam diferença. Desde então, nossa linha só cresce, conquistando a confiança de clientes e profissionais.
            </Card.Text>
          </Card>
        </Col>
      </Row>

      {/* Galeria */}
      <Row className="mb-5">
        <Col>
          <h3 className="text-center mb-4">Galeria</h3>
          <Row>
            {[
              "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1529692236671-f1a33a87e3f8?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?auto=format&fit=crop&w=400&q=80"
            ].map((src, idx) => (
              <Col key={idx} xs={12} sm={6} md={4} className="mb-3">
                <Image src={src} rounded fluid style={{ height: "200px", objectFit: "cover" }} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* Vídeo institucional */}
      <Row className="mb-5 justify-content-center">
        <Col md={8} className="text-center">
          <h3>Vídeo institucional</h3>
          <div className="ratio ratio-16x9 shadow rounded mt-3">
            <iframe
              src="https://www.youtube.com/embed/q3J_r1tTxAk"
              title="Vídeo Institucional Clora"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>

      {/* FAQs */}
      <Row className="mb-5">
        <Col>
          <h3 className="mb-4 text-center">
            <FaQuestionCircle className="text-success me-2" />
            Perguntas frequentes
          </h3>
          <Accordion>
            {faqs.map(({ question, answer }, idx) => (
              <Accordion.Item eventKey={idx.toString()} key={idx}>
                <Accordion.Header>{question}</Accordion.Header>
                <Accordion.Body>{answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>

      {/* Nossa equipe */}
      <Row className="mb-5 text-center">
        <Col>
          <h3>
            <FaUsers className="text-success me-2" />
            Nossa equipe
          </h3>
        </Col>
      </Row>
      <Row className="mb-4 justify-content-center">
        {teamMembers.map(({ name, role, photo }, idx) => (
          <Col key={idx} xs={6} sm={4} md={3} className="mb-4">
            <Card className="shadow-sm p-3 border-0">
              <Image src={photo} roundedCircle fluid style={{ height: "150px", width: "150px", objectFit: "cover", margin: "0 auto" }} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="text-muted">{role}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Depoimentos */}
      <Row className="text-center mb-4">
        <Col>
          <h3>O que dizem nossos clientes</h3>
        </Col>
      </Row>
      <Row className="mb-5 justify-content-center">
        {[1, 2, 3].map((i) => (
          <Col md={4} key={i}>
            <Card className="p-3 shadow-sm">
              <FaSmile size={40} className="text-success mb-2" />
              <Card.Text>
                "Produto excelente! Me ajudou muito no tratamento da ansiedade."
              </Card.Text>
              <Card.Footer>
                <small className="text-muted">- Cliente feliz #{i}</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Call-to-action */}
      <Row className="text-center">
        <Col>
        <Link to="/shop">
          <Button variant="success" size="lg">
            Conheça nossos produtos
          </Button>
        </Link>
        </Col>
      </Row>
    </Container>
  );
}

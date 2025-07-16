import { Container, Row, Col, Card, Button, Badge, Form, Carousel } from 'react-bootstrap';
import cloraLogo from '../assets/clora_logo.png';
import user1 from '../assets/user1.jpg';
import product1 from '../assets/product1.jpg';
import product4 from '../assets/product4.png';
import pomada from '../assets/pomada.jpg';
import saudemental from '../assets/saudemental.png';
import cbdthc from '../assets/cdb.jpg';
import usoresponsavel from '../assets/usoresponsavel.jpg';
import galeria1 from '../assets/galeria1.jpg';
import galeria2 from '../assets/galeria2.jpg';
import galeria3 from '../assets/galeria3.jpg';
import { Link } from 'react-router-dom';

const BlogPost = () => {
  return (
    <>
      {/* Hero do post */}
      <section className="position-relative text-white" style={{ backgroundImage: 'url(/images/blog-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '400px' }}>
        <Container className="h-100 d-flex flex-column justify-content-center align-items-center">
          <h1 className="display-4 fw-bold text-shadow">Os benefícios da cannabis medicinal no controle da dor crônica</h1>
          <div>
            <Badge bg="success" className="me-2">Saúde</Badge>
            <Badge bg="success" className="me-2">Bem-estar</Badge>
            <Badge bg="success">Medicinal</Badge>
          </div>
          <Button variant="light" size="sm" className="mt-3">Compartilhar</Button>
        </Container>
      </section>

      <Container className="my-5">
        <Row>
          <Col md={8}>
            {/* Dados do autor */}
            <div className="d-flex align-items-center mb-4">
              <img src={cloraLogo} alt="Autor" width="60" height="60" className="rounded-circle me-3" />
              <div>
                <strong>Clora Team</strong>
                <p className="mb-0 text-muted" style={{ fontSize: '0.9rem' }}>Publicado em 20 de Julho de 2025</p>
              </div>
            </div>

            {/* Texto principal */}
            <p>
              A cannabis medicinal vem sendo estudada cada vez mais por seus benefícios no tratamento de dores crônicas...
            </p>

            {/* Vídeo embutido */}
            <div className="ratio ratio-16x9 mb-4">
              <iframe src="https://www.youtube.com/embed/your_video_id" title="Vídeo sobre cannabis medicinal" allowFullScreen></iframe>
            </div>

            {/* Citação destacada */}
            <blockquote className="bg-light p-3 rounded border-start border-success">
              “Estudos mostram que o uso responsável da cannabis medicinal pode ajudar pacientes a recuperar qualidade de vida.” — Dr. Paulo Mendes
            </blockquote>

            {/* Galeria */}
            <Carousel className="my-4">
              <Carousel.Item>
                <img src= {galeria1} className="d-block w-100" alt="..." />
              </Carousel.Item>
              <Carousel.Item>
                <img src= {galeria2} className="d-block w-100" alt="..." />
              </Carousel.Item>
              <Carousel.Item>
                <img src= {galeria3} className="d-block w-100" alt="..." />
              </Carousel.Item>
            </Carousel>

            {/* Produtos relacionados */}
            <h4 className="mt-5">Produtos relacionados</h4>
            <Row>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src= {product1} />
                  <Card.Body>
                    <Card.Title>Óleo CBD 500mg</Card.Title>
                    <Link to={'/shop'}>
                      <Button variant="success" size="sm">Ver Produto</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src= {product4} />
                  <Card.Body>
                    <Card.Title>Cápsulas de CBD</Card.Title>
                    <Link to={'/shop'}>
                      <Button variant="success" size="sm">Ver Produto</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src= {pomada} />
                  <Card.Body>
                    <Card.Title>Pomada CBD</Card.Title>
                    <Link to={'/shop'}>
                      <Button variant="success" size="sm">Ver Produto</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Leia também */}
            <h4 className="mt-5">Leia também</h4>
            <Row>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src= {saudemental}/>
                  <Card.Body>
                    <Card.Title style={{ fontSize: '1rem' }}>Cannabis e saúde mental</Card.Title>
                    <Button variant="link" href="/">Ver mais</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src= {cbdthc} />
                  <Card.Body>
                    <Card.Title style={{ fontSize: '1rem' }}>CBD vs THC</Card.Title>
                      <Button variant="link" href="/">Ver mais</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src= {usoresponsavel} />
                  <Card.Body>
                    <Card.Title style={{ fontSize: '1rem' }}>Uso responsável</Card.Title>
                      <Button variant="link" href="/">Ver mais</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Sobre o autor */}
            <Card className="my-4">
              <Card.Body className="d-flex align-items-center">
                <img src={cloraLogo} width="60" height="60" className="rounded-circle me-3" alt="Autor" />
                <div>
                  <strong>Clora Team</strong>
                  <p className="mb-1">Equipe multidisciplinar dedicada a saúde e pesquisa sobre cannabis medicinal.</p>
                  <div>
                    <a href="#"><i className="bi bi-twitter me-2"></i></a>
                    <a href="#"><i className="bi bi-instagram me-2"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* Comentários */}
            <section className="my-5">
              <h5>Comentários</h5>
              {/* balões */}
              <Card className="mb-3">
                <Card.Body>
                  <div className="d-flex">
                    <img src= {user1} width="40" height="40" className="rounded-circle me-2" alt="Maria"/>
                    <div>
                      <strong>Maria</strong> <small className="text-muted"> - 2 dias atrás</small>
                      <p className="mb-0">Excelente artigo!</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              {/* Form */}
              <Form>
                <Form.Group className="mb-2" controlId="comment">
                  <Form.Label>Deixe seu comentário</Form.Label>
                  <Form.Control as="textarea" rows={2} placeholder="Digite aqui..." />
                </Form.Group>
                <Button variant="success">Enviar</Button>
              </Form>
            </section>
              <Link to="/">
                <Button variant="secondary" href="/blog">← Voltar ao Blog</Button>
              </Link>
          </Col>

          {/* Sidebar */}
          <Col md={4}>
            <h5>Posts populares</h5>
            <ul className="list-unstyled">
              <li><a href="/">Cannabis e saúde mental</a></li>
              <li><a href="/">CBD vs THC</a></li>
              <li><a href="/">Uso responsável</a></li>
            </ul>
            <h5 className="mt-4">Categorias</h5>
            <Badge bg="success" className="me-1">Saúde</Badge>
            <Badge bg="success" className="me-1">Produtos</Badge>
            <Badge bg="success">Legalidade</Badge>

            <Card className="mt-4 p-2 text-center">
              <p className="mb-1">Quer saber mais?</p>
              <Link to={"/contact"} className="stretched-link">
                <Button variant="success" size="sm">Assine nossa Newsletter</Button>
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BlogPost;

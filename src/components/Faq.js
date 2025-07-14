import React, { useState } from "react";
import { Container, Accordion, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Faq() {
  const allFaqs = [
    {
      question: "O que é cannabis medicinal?",
      answer: "Cannabis medicinal é o uso terapêutico de substâncias derivadas da planta cannabis, como CBD e THC, para tratar sintomas ou doenças específicas."
    },
    {
      question: "Quais são os benefícios da cannabis medicinal?",
      answer: "Pode ajudar no controle de dores crônicas, distúrbios do sono, ansiedade, epilepsia, entre outros, sempre com prescrição médica."
    },
    {
      question: "Preciso de receita médica para comprar?",
      answer: "Sim, no Brasil a comercialização e uso é permitida somente com prescrição de um profissional de saúde habilitado."
    },
    {
      question: "É legal comprar produtos de cannabis medicinal?",
      answer: "Sim, desde que sejam produtos aprovados pela Anvisa ou importados com autorização específica, sempre acompanhados de receita médica."
    },
    {
      question: "Existe diferença entre cannabis medicinal e recreativa?",
      answer: "Sim! A cannabis medicinal é usada com orientação médica para fins terapêuticos, enquanto o uso recreativo é proibido pela legislação brasileira."
    },
    // Perguntas extras:
    {
      question: "Como posso confiar na qualidade dos produtos Clora?",
      answer: "Todos os nossos produtos têm certificados de origem e passam por rigorosos controles de qualidade para garantir pureza e eficácia."
    },
    {
      question: "Quais métodos de pagamento são aceitos?",
      answer: "Aceitamos cartões de crédito, débito, Pix e boletos bancários para maior comodidade."
    },
    {
      question: "Meus dados pessoais estão protegidos?",
      answer: "Sim! Seguimos as diretrizes da LGPD e usamos criptografia para proteger todas as suas informações."
    },
    {
      question: "Posso devolver um produto se não me adaptar?",
      answer: "Sim! Oferecemos política de troca ou devolução em até 7 dias corridos após o recebimento, conforme o CDC."
    },
    {
      question: "A Clora vende produtos contendo THC?",
      answer: "Atualmente comercializamos apenas produtos com predominância de CBD, respeitando a legislação vigente."
    },
    {
      question: "Existe limite de compra por pessoa?",
      answer: "Sim, de acordo com a prescrição médica e legislação brasileira, cada pessoa pode adquirir apenas a quantidade indicada."
    },
    {
      question: "Vocês entregam em todo o Brasil?",
      answer: "Sim! Enviamos para todo o território nacional com frete calculado no momento da compra."
    },
    {
      question: "Quanto tempo leva para chegar meu pedido?",
      answer: "O prazo varia de acordo com a região e modalidade de frete escolhida, mas costuma ser entre 3 a 10 dias úteis."
    },
    {
      question: "Posso usar cannabis medicinal para ansiedade?",
      answer: "Existem estudos que indicam benefícios, mas sempre deve ser feito com acompanhamento e prescrição médica."
    }
  ];

  const [search, setSearch] = useState("");

  const filteredFaqs = allFaqs.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Perguntas Frequentes (FAQ)</h2>

      <Form className="mb-4">
        <Form.Control
          type="text"
          placeholder="Busque por palavras-chave..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form>

      <Accordion alwaysOpen>
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, idx) => (
            <Accordion.Item eventKey={idx.toString()} key={idx}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))
        ) : (
          <p className="text-center">Nenhuma pergunta encontrada.</p>
        )}
      </Accordion>

      <div className="mt-5 text-center">
        <h5>Ainda tem dúvidas?</h5>
        <p>Entre em contato com nossa equipe, teremos prazer em ajudar!</p>
        <Link to="/contact">
             <Button variant="success">
                 Fale Conosco
            </Button>
        </Link>
      </div>
    </Container>
  );
}

import { Modal, Button } from "react-bootstrap";

export default function ProductDetailsModal({ product, onHide }) {
  if (!product) return null;

  return (
    <Modal show onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={product.image} alt={product.name} className="img-fluid mb-3 rounded" />
        <p><strong>Descrição:</strong> {product.description}</p>
        <p><strong>Categoria:</strong> {product.category}</p>
        <p><strong>Modo de Uso:</strong> Lorem ipsum dolor sit amet, usar 2x ao dia conforme orientação médica.</p>
        <p><strong>Ingredientes:</strong> CBD puro, óleo de coco, essências naturais.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success">Adicionar ao Carrinho</Button>
        <Button variant="secondary" onClick={onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}

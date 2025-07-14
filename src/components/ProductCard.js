import { Card, Button } from "react-bootstrap";

export default function ProductCard({ product, onViewDetails }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.shortDescription}</Card.Text>
        <Button variant="success" onClick={() => onViewDetails(product)}>
          Ver Detalhes
        </Button>
      </Card.Body>
    </Card>
  );
}

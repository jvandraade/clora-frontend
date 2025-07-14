import { Container } from 'react-bootstrap';

export default function VideoSection() {
  return (
    <section className="py-5">
      <Container className="text-center">
        <h2 className="mb-4">Explore Clora</h2>
        <div className="ratio ratio-16x9">
          <iframe 
            src="https://www.youtube.com/embed/OEv7p13FfXI" 
            title="Clora Video"
            allowFullScreen
          ></iframe>
        </div>
      </Container>
    </section>
  );
}

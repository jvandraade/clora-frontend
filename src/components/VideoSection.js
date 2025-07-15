import { Container } from 'react-bootstrap';

export default function VideoSection() {
  return (
    <section className="py-5">
      <Container className="text-center">
        <h2 className="mb-4">Explore Clora</h2>
        <div className="ratio ratio-16x9">
          <iframe 
            src="https://www.youtube.com/watch?v=plJd00hPDIo&pp=ygUwdsOtZGVvIHNvYnJlIHRyYXRhbWVudG9zIG1lZGljaW5haXMgY29tIGNhbmFiYmlz" 
            title="Clora Video"
            allowFullScreen
          ></iframe>
        </div>
      </Container>
    </section>
  );
}

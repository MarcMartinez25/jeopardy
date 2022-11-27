import { Button, Container } from '@mui/material';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <Container>
        <Button variant='contained'>Start A New Game</Button>
      </Container>
    </div>
  );
}

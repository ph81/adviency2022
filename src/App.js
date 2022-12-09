import Home from './pages/Home';
import GlobalStyles, { Container } from './GlobalStyles';
import 'nes.css/css/nes.min.css';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Home />
      </Container>
    </>
  );
};

export default App;

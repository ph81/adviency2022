import GlobalStyles, { SpecialTitle, Section, Container } from './GlobalStyles';
import 'nes.css/css/nes.min.css';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Section className="nes-container with-title">
          <SpecialTitle>Gifts</SpecialTitle>
          <div className="lists">
            <ul className="nes-list is-circle">
              <li>Gorra</li>
              <li>Calcetines</li>
              <li>Baby Yoda</li>
              <li>Fall Guys for Nintendo Switch</li>
            </ul>
          </div>
        </Section>
      </Container>
    </>
  );
};

export default App;

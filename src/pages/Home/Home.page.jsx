import GiftList from '../../components/GiftList';
import NewItem from '../../components/NewItem/NewItem.component';
import { Container } from '../../GlobalStyles';

const Home = () => {
  return (
    <Container>
      <GiftList />
      <NewItem />
    </Container>
  );
};

export default Home;

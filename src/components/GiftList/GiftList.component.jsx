import Item from '../Item';
import { SpecialTitle, GiftSection } from '../../GlobalStyles';

const GiftList = () => {
  return (
    <GiftSection className="nes-container with-title">
      <SpecialTitle>Gifts</SpecialTitle>
      <div className="lists">
        <ul className="nes-list is-circle">
          <Item name={'Gorra'} />
          <Item name={'Fortnite for Nintendo Switch'} />
          <Item name={'Calcetines'} />
        </ul>
      </div>
    </GiftSection>
  );
};

export default GiftList;

import { SpecialTitle, GiftSection } from '../../GlobalStyles';

const GiftList = () => {
  return (
    <GiftSection className="nes-container with-title">
      <SpecialTitle>Gifts</SpecialTitle>
      <div className="lists">
        <ul className="nes-list is-circle">
          <li>Gorra</li>
          <li>Calcetines</li>
          <li>Baby Yoda</li>
          <li>Fall Guys for Nintendo Switch</li>
        </ul>
      </div>
    </GiftSection>
  );
};

export default GiftList;

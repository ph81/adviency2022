import { SpecialTitle, Section } from '../../GlobalStyles';

const GiftList = () => {
  return (
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
  );
};

export default GiftList;

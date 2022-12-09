import { Section, Button } from '../../GlobalStyles';

const GiftInput = () => {
  return (
    <Section>
      <div className="nes-field">
        <label htmlFor="new-gift">Add new gift</label>
        <input type="text" id="name_field" className="nes-input" />
        <Button type="button" className="nes-btn">
          Add 🎁
        </Button>
      </div>
    </Section>
  );
};

export default GiftInput;

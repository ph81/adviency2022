import { useState, useContext } from 'react';
import { GiftContext } from '../../context/GiftContext';
import { useNavigate, Link } from 'react-router-dom';
import { Section, Button } from '../../GlobalStyles';

const NewItem = () => {
  const { gifts, addItem } = useContext(GiftContext);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState();
  let navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newGift = {
      id: gifts.length + 1,
      name,
      amount,
    };
    addItem(newGift);
    setAmount('');
    setName('');
    navigate('/');
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  return (
    <Section>
      <div className="nes-field">
        <label htmlFor="new-gift">Add new gift</label>
        <input
          type="text"
          id="name_field"
          onChange={handleName}
          className="nes-input"
          placeholder="Name of the gift"
        />
        <input
          type="text"
          id="amount_field"
          onChange={handleAmount}
          className="nes-input"
          placeholder="amount"
        />
        <Button type="button" className="nes-btn" onClick={handleOnSubmit}>
          Add 🎁
        </Button>
        <span>
          <Link to={'/'}>Cancel</Link>
        </span>
      </div>
    </Section>
  );
};

export default NewItem;

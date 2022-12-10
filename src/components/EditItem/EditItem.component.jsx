import { useState, useContext, useEffect } from 'react';
import { GiftContext } from '../../context/GiftContext';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { Section, Button } from '../../GlobalStyles';

const EditItem = () => {
  const { gifts, editItem } = useContext(GiftContext);
  let navigate = useNavigate();
  const [selectedGift, setSelectedGift] = useState({
    id: null,
    name: '',
    amount: null,
  });
  const { id } = useParams();

  useEffect(() => {
    const giftId = id;
    const selectedGift = gifts.find((gift) => gift.id === parseInt(giftId));
    setSelectedGift(selectedGift);
  }, []);

  const handleEdit = (e) => {
    e.preventDefault();
    editItem(selectedGift);
    navigate('/');
  };

  const handleOnChange = (userKey, value) =>
    setSelectedGift({ ...selectedGift, [userKey]: value });

  if (!selectedGift || !selectedGift.id) {
    return <div>sdf</div>;
  }

  return (
    <Section>
      <div className="nes-field">
        <label htmlFor="new-gift">Edit gift</label>
        <input
          type="text"
          id="name_field"
          value={selectedGift.name}
          onChange={(e) => handleOnChange('name', e.target.value)}
          className="nes-input"
        />
        <input
          type="text"
          id="amount_field"
          value={selectedGift.amount}
          onChange={(e) => handleOnChange('amount', e.target.value)}
          className="nes-input"
        />
        <Button type="button" className="nes-btn" onClick={handleEdit}>
          Edit 🎁
        </Button>
        <span>
          <Link to={'/'}>Cancel</Link>
        </span>
      </div>
    </Section>
  );
};

export default EditItem;

import { useState, useContext } from 'react';
import { GiftContext } from '../../context/GiftContext';
import { useNavigate } from 'react-router-dom';
import { Modal, ModalContainer, Button } from '../../GlobalStyles';
import { CancelButton, GiftForm, GiftActions } from './NewItem.styles';

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
    navigate('/');
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  return (
    <ModalContainer id="newitem-modal">
      <Modal>
        <CancelButton onClick={() => navigate(-1)}>❌</CancelButton>
        <GiftForm className="nes-field">
          <h3>Add new gift</h3>
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
          <GiftActions>
            <Button type="button" className="nes-btn" onClick={handleOnSubmit}>
              Add 🎁
            </Button>
          </GiftActions>
        </GiftForm>
      </Modal>
    </ModalContainer>
  );
};

export default NewItem;

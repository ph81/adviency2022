import { Link, useLocation } from 'react-router-dom';
import { AddBtn, BtnContainer } from './AddButton.styles';

const AddButton = () => {
  const location = useLocation();
  return (
    <BtnContainer>
      <Link to={'modal'} state={{ background: location }}>
        <AddBtn>Add 🎁</AddBtn>
      </Link>
    </BtnContainer>
  );
};

export default AddButton;

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GiftContext } from '../../context/GiftContext';
import { Button } from '../../GlobalStyles';

const Item = ({ id, name, amount }) => {
  const { removeItem, editItem } = useContext(GiftContext);

  return (
    <>
      <div>
        <p>
          {name} - {amount}
          <span>
            <Link to={`/edit/${id}`}>
              <Button onClick={() => editItem(id)}>🗒️</Button>
            </Link>
            <Button onClick={() => removeItem(id)}>❌</Button>
          </span>
        </p>
      </div>
    </>
  );
};

export default Item;

import { Button } from '../../GlobalStyles';

const Item = ({ name }) => {
  return (
    <>
      <div>
        <p>
          {name}{' '}
          <span>
            <Button alt>🗒️</Button>
          </span>
        </p>
      </div>
    </>
  );
};

export default Item;

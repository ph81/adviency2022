import { Button } from '../../GlobalStyles';

const Item = ({ name }) => {
  return (
    <>
      <div>
        <p>
          {name}{' '}
          <span>
            <Button>🗒️</Button>
            <Button>❌</Button>
          </span>
        </p>
      </div>
    </>
  );
};

export default Item;

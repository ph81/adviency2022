import { useEffect, useState } from 'react';
import { GiftContext } from '../../context/GiftContext';
import Item from '../Item';
import AddButon from '../../components/AddButton';
import { SpecialTitle, GiftSection } from '../../GlobalStyles';
import { useContext } from 'react';

const GiftList = () => {
  const [loading, setloading] = useState(true);
  const { gifts } = useContext(GiftContext);

  // Pre-loader
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 500);
  }, []);

  return (
    <>
      <GiftSection className="nes-container with-title">
        <SpecialTitle>Gifts</SpecialTitle>

        {loading ? (
          <span>Loading...</span>
        ) : (
          <div className="lists">
            <ul className="nes-list">
              {gifts.length > 0 ? (
                gifts.map((gift) => <Item key={gift.id} {...gift} />)
              ) : (
                <li>No gifts in the list, add some!</li>
              )}
            </ul>
          </div>
        )}
      </GiftSection>
      <AddButon />
    </>
  );
};

export default GiftList;

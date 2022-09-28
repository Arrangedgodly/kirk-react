import './Main.css';
import { initialCards } from '../../utils/constants';
import Card from '../Card/Card';

function Main() {
  return (
    <div className='main'>
      <div className="cards">
        {initialCards.map((card) => (
          <Card
            key={card.name}
            name={card.name}
            release={card.release}
            image={card.image}
            soundcloud={card.soundcloud}
            spotify={card.spotify}
            youtube={card.youtube}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
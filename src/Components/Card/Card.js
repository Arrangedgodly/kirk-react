import "./Card.css";
import './icon.css';
import soundcloud from '../../images/soundcloud.svg';
import spotify from '../../images/spotify.svg';
import youtube from '../../images/youtube.svg';

function Card(props) {
  return (
    <div className="card">
      <div className="card__image-wrapper">
        <div className="card__image-cover">
          <h3 className="card__title">{props.name}</h3>
          <p className="card__desc">{props.release}</p>
        </div>
        <img src={props.image} alt='Single Cover' className="card__image" />
      </div>
      <ul className="card__links">
        <a href={props.soundcloud} className="card__link card__link_soundcloud" target="_blank">
          <img
            src={soundcloud}
            alt="soundcloud icon"
            className="card__link-icon icon icon_soundcloud"
          />
        </a>
        <a href={props.spotify} className="card__link card__link_spotify" target="_blank">
          <img
            src={spotify}
            alt="spotify icon"
            className="card__link-icon icon icon_spotify"
          />
        </a>
        <a href={props.youtube} className="card__link card__link_youtube" target="_blank">
          <img
            src={youtube}
            alt="youtube icon"
            className="card__link-icon icon icon_youtube"
          />
        </a>
      </ul>
    </div>
  );
}

export default Card;

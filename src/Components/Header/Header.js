import "./Header.css";
import './nav.css';
import instagram from '../../images/instagram.svg';
import soundcloud from '../../images/soundcloud.svg';
import spotify from '../../images/spotify.svg';
import twitter from '../../images/twitter.svg';
import youtube from '../../images/youtube.svg';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        Kirk <span className="header__title-span">LVNDR</span>
      </h1>
      <h1 className="header__title header__title_background">
        Kirk <span className="header__title-span">LVNDR</span>
      </h1>
      <nav className="nav">
        <ul className="nav__list">
          <li>
            <a href="https://www.instagram.com/kirklvndr/" target="_blank">
              <img
                src={instagram}
                alt="instagram"
                className="nav__icon nav__icon_instagram"
              />
            </a>
          </li>
          <li>
            <a href="https://soundcloud.com/maytrax" target="_blank">
              <img
                src={soundcloud}
                alt="soundcloud"
                className="nav__icon nav__icon_soundcloud"
              />
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/artist/6mWa9uUwYCUgJxzr0ljLQQ?si=ZYeedSoRRHC4yZpnJBLx9Q"
              target="_blank"
            >
              <img
                src={spotify}
                alt="spotify"
                className="nav__icon nav__icon_spotify"
              />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/thedirtgallery" target="_blank">
              <img
                src={twitter}
                alt="twitter"
                className="nav__icon nav__icon_twitter"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCSiKDlv4pXxF16r1T1Vs_aw"
              target="_blank"
            >
              <img
                src={youtube}
                alt="youtube"
                className="nav__icon nav__icon_youtube"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

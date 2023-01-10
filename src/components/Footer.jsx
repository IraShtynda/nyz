import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faApple, faAmazon, faFacebookF, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import '../style/Footer.scss'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
            <span>© 2023 created by Iryna Shtynda</span>
                <div className='footer__socials'>
                    <a href='https://www.spotify.com'><FontAwesomeIcon icon={faSpotify} /></a>
                    <a href='https://www.apple.com/apple-music/'><FontAwesomeIcon icon={faApple} /></a>
                    <a href='https://www.amazon.com/music'><FontAwesomeIcon icon={faAmazon} /></a>
                    <a href='https://www.facebook.com'><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href='https://www.twitter.com'><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href='https://www.instagram.com'><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href='https://www.youtube.com'><FontAwesomeIcon icon={faYoutube} /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
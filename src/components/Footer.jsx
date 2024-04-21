import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Footer.css";
export default function Footer () {
    return (
        <footer className="footer">
            <a href='/'>About YogaApp</a>
            <a href='/'>&copy;2024 YogaApp</a>
            <a href='/'>www.yogaapp.com</a>
            <div className='icons'>
               <FontAwesomeIcon icon={faFacebook} className='icon' />
               <FontAwesomeIcon icon={faTwitter} className='icon' />
               <FontAwesomeIcon icon={faInstagram} className='icon' />
               <FontAwesomeIcon icon={faLinkedin} className='icon' />
            </div>
        </footer>
    )
}
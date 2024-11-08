import '../App.css';
import '../styles/Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Map from '../components/Map';


function Contact() {

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const handleEmailClick = () => {
        window.location.href = 'mailto:example@example.com?subject=Hello%20from%20React&body=Just%20reaching%20out!';
    };

    return (
        <div className="App">

            <main>
                <h2>Contact Us</h2>
                <section>
                    <div className='contact-div'>
                        <div className='contacts'>
                            <FontAwesomeIcon icon={faPhone} size="2x" color="red" />
                            <div className='contact-text'>
                                <h4>Phone Number</h4>
                                <p>Tel: +254 775 160 079</p>
                                <p>Tel: +254 717 592 373</p>
                            </div>
                        </div>
                        <div className='contacts' onClick={handleEmailClick}>
                            <FontAwesomeIcon icon={faEnvelope} size="2x" />
                            <div className='contact-text'>
                                <h4>Email</h4>
                                <p>example@email.com</p>
                            </div>

                        </div>
                        <div className='contacts'>
                            <FontAwesomeIcon icon={faAddressBook} size="2x" color="red" />
                            <div className='contact-text'>
                                <h4>P.O. Box Address</h4>
                                <p>P.O. Box: 7635-00300 NBI</p>
                            </div>

                        </div>
                    </div>

                    <div className='contact-div'>
                        <div className='contacts' onClick={() => openInNewTab('https://instagram.com')}>
                            <FontAwesomeIcon icon={faInstagram} size="2x" color="red" />
                            <div className='contact-text'>
                                <h4>Instagram</h4>
                            </div>
                        </div>
                        <div className='contacts' onClick={() => openInNewTab('https://facebook.com')}>
                            <FontAwesomeIcon icon={faFacebook} size="2x" color="red" />
                            <div className='contact-text'>
                                <h4>Facebook</h4>
                            </div>
                        </div>
                    </div>
                </section>

                <h3>Where to find us</h3>
                <Map />
            </main>


        </div>
    );
}

export default Contact;

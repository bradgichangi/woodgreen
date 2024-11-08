import '../App.css';
import '../styles/Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';


function Contact() {
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
                        <div className='contacts'>
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
                        <div className='contacts'>
                            <FontAwesomeIcon icon={faInstagram} size="2x" color="red" />
                            <div className='contact-text'>
                                <h4>Instagram</h4>
                            </div>
                        </div>
                        <div className='contacts'>
                            <FontAwesomeIcon icon={faFacebook} size="2x" color="red" />
                            <div className='contact-text'>
                                <h4>Facebook</h4>
                            </div>
                        </div>
                    </div>
                </section>

                <h3>Where to find us</h3>
            </main>


        </div>
    );
}

export default Contact;

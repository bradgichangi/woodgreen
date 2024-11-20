import '../App.css';
import '../styles/Home.css';
import Slideshow from '../components/Slideshow';
import image1 from '../images/students.PNG';
import image2 from '../images/students_2.PNG';
import { useNavigate } from 'react-router-dom';

function Home() {

    const images = [
        image1,
        image2
    ];

    const navigate = useNavigate();

    const redirect = () => {
        navigate('/courses');
    };

    return (
        <div className="App">
            <div className='slideshow'>
                <Slideshow images={images} interval={5000} />
            </div>
            <main className='home-main'>
                
                <div className='main-text'>
                    <h2>Welcome To Woodgreen Training Institute</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu arcu, posuere et maximus nec, tempus sed felis. Etiam massa lectus, rhoncus a enim id, tristique accumsan ex. Curabitur a placerat augue. Sed tempor sem nisi, vel mattis sapien porta in. Curabitur eu nibh nulla. Donec ullamcorper commodo fringilla. Proin nisi ante, egestas at varius id, placerat a erat. Curabitur pulvinar bibendum neque. Phasellus pellentesque, arcu et eleifend volutpat, mi turpis malesuada purus, lacinia vehicula est nibh at nisi. In ac lorem sit amet est eleifend iaculis quis quis risus.
                        Aliquam ac tellus et urna viverra pellentesque id ut turpis. Sed pretium, magna ut feugiat porta, orci libero dapibus nisi, vitae tristique est tellus et lorem. Curabitur ultricies velit vel tortor placerat porta. In porttitor eget est in vulputate. Vestibulum arcu odio, pharetra eu auctor vel, congue id urna. Mauris et quam ac enim ultrices semper. Donec tortor lacus, bibendum sit amet maximus quis, maximus eu dolor. Quisque feugiat odio rhoncus lorem aliquam egestas. Etiam quis lectus scelerisque, viverra sem nec, lobortis magna.
                    </p>
                </div>
                <div className='main-section'>
                    <h3>What do we offer?</h3>
                    <div className='view-course' onClick={redirect}>View courses</div>
                </div>
            </main>


        </div>
    );
}

export default Home;

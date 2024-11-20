import '../App.css';
import '../styles/Courses.css'
import courseData from '../data/course_data.json'
import Modal from '../components/Modal'
import React, { useState } from 'react';



function Courses() {

    const [selectedItem, setSelectedItem] = useState(null);

    const handleOpenModal = (item) => {
        setSelectedItem(item);
    };

    const handleCloseModal = () => {
        setSelectedItem(null);
    };

    return (
        <div className="App">

            <main className='courses-main'>
                <h2>Courses</h2>

                <section className='course-section'>
                    
                    <div className='courses'>
                        <h3>Certified</h3>
                        {courseData['courses']['certified'].map((item) => (<div className='course' onClick={() => handleOpenModal(item)}>{item['title']}</div>))}
                        {selectedItem && <Modal item={selectedItem} onClose={handleCloseModal} />}
                        {/* <div className='course' onClick={openModal}>Automotive Engineering</div>
                        <div className='course'>Baking Technology</div>
                        <div className='course'>Fashion Design Technology</div>
                        <div className='course'>Information Communication Technology</div>
                        <div className='course'>Food Production</div>
                        <div className='course'>Food and Beverage Sales and Service</div>
                        <div className='course'>Carpentry and Joinery</div> */}
                    </div>
                    

                    <div className='courses'>
                        <h3>Diploma</h3>
                        {courseData['courses']['diploma'].map((item) => (<div className='course' onClick={() => handleOpenModal(item)}>{item['title']}</div>))}
                        {selectedItem && <Modal item={selectedItem} onClose={handleCloseModal} />}
                        {/* <div className='course'>Music Technology</div>
                        <div className='course'>Welding and Fabrication</div>
                        <div className='course'>Electrical Engineering (Power Option)</div>
                        <div className='course'>Information Communication Technology</div>
                        <div className='course'>Music Performance</div> */}
                    </div>
                </section>
            </main>

        </div>
    );
}

export default Courses;

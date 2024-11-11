import '../App.css';
import '../styles/Courses.css'
import React, { useState } from 'react';

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null; // Render nothing if the modal is not open

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    );
}

function Courses() {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div className="App">

            <main>
                <h2>Courses</h2>

                <section className='course-section'>

                    <Modal className='modal' isOpen={isModalOpen} onClose={closeModal}>
                        <h2>Modal Title</h2>
                        <p>This is the modal content.</p>
                    </Modal>
                    
                    <div className='courses'>
                        <h3>Certified</h3>
                        <div className='course' onClick={openModal}>Automotive Engineering</div>
                        <div className='course'>Baking Technology</div>
                        <div className='course'>Fashion Design Technology</div>
                        <div className='course'>Information Communication Technology</div>
                        <div className='course'>Food Production</div>
                        <div className='course'>Food and Beverage Sales and Service</div>
                        <div className='course'>Carpentry and Joinery</div>
                    </div>
                    

                    <div className='courses'>
                        <h3>Diploma</h3>
                        <div className='course'>Music Technology</div>
                        <div className='course'>Welding and Fabrication</div>
                        <div className='course'>Electrical Engineering (Power Option)</div>
                        <div className='course'>Information Communication Technology</div>
                        <div className='course'>Music Performance</div>
                    </div>
                </section>
            </main>

        </div>
    );
}

export default Courses;

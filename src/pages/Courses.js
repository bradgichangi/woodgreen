import '../App.css';
import '../styles/Courses.css'

function Courses() {
    return (
        <div className="App">

            <main>
                <h2>Courses</h2>

                <h3>Certified</h3>
                
                <div className='courses'>
                    <div className='course'>Automotive Engineering L5</div>
                    <div className='course'>Baking Technology L5</div>
                    <div className='course'>Fashion Design Technology L5</div>
                    <div className='course'>Information Communication Technology L5</div>
                    <div className='course'>Food Production L5</div>
                    <div className='course'>Food and Beverage Sales and Service L5 </div>
                    <div className='course'>Carpentry and Joinery L5</div>
                </div>
                
                <h3>Diploma</h3>

                <div className='courses'>
                    <div className='course'>Music Technology L6</div>
                    <div className='course'>Welding and Fabrication L6</div>
                    <div className='course'>Electrical Engineering (Power Option) L6</div>
                    <div className='course'>Information Communication Technology L6</div>
                    <div className='course'>Music Performance L6</div>
                </div>
            </main>

        </div>
    );
}

export default Courses;

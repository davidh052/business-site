import './Navbar.css';
import logo from './logo.jpg'; // or .jpg or .svg


function Navbar() {

    return (
        <div className='topnav'> 
            <div className='nav-left'>
                <h2>M.E.D Lab Services</h2>
                <img src={logo} alt="Company Logo" className="logo" />
            </div>

            <a href="https://koalendar.com/u/icmRODqsBlMNL1NCYwqMmbDkRdV2" className='book'> Book an Appointment</a>
           

        </div>



    );

}

export default Navbar;
import './navbar.css'
import alooh_icon from '../assets/alooh.png'

const Navbar = () => {

    const calling = () =>{
        window.alert("Reach me on this number 0796884110");
    }

    return (
       <div className="navbar">

              <div className="logo">
                  <img src={alooh_icon} alt={"logo"}/>
              </div>
              <div className="links">
                  <ul>
                      <a href="/"> <i class="fa-solid fa-house-user"></i>Home</a>
                      <a href="/"> <i class="fa-solid fa-mobile-button"></i>Contact</a>
                      <a href="/projects.jsx"> <i class="fa-solid fa-diagram-project"></i>projects</a>
                      <a href="/"> <i class="fa-solid fa-bell"></i>Testimonials</a>
                  </ul>
              </div>
           <div className="call">
               <button onClick={calling}>Call Me <i class="fa-solid fa-phone"></i></button>
           </div>

       </div>
    )
}
export default Navbar
import Navbar from "./components/navbar.jsx";
import Herosection from "./components/Hero-section.jsx";
import './App.css'
import Projects from "./components/Projects.jsx";

const App = () => {
  return (
    <div className="app">
      <div className="body" >
          <Navbar />
          <Herosection />
          <Projects/>
      </div>
      </div>
  )

 }
 export default App
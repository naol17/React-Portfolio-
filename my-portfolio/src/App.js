import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/intro";
import Services from "./Components/Services/services";
import Experience from "./Components/Experiance/Experiance";
import Work from "./Components/work/work";
function App(){
  return(
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Work/>
    </div>
  );
}

export default App;
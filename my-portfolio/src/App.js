import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/intro";
import Services from "./Components/Services/services";
function App(){
  return(
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
    </div>
  );
}

export default App;
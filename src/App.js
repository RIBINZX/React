import './App.css';
import Header from './Home';
import Navbar from './Navbar';
import Contact from './Contact';
import Welcome from './Welcome';


function App() {
  
  return (
    <div>
      <Navbar/>
      <Header/>
      <Contact st={{color:"red"}} name="first"/>
      <Contact st={{color:"blue"}} name="sec"/>
      <Welcome/>
    </div>
  );
}

export default App;

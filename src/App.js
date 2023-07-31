import './App.css';
import Header from './basics/Home';
import Navbar from './basics/Navbar';
import Contact from './basics/Contact';
import Welcome from './basics/Welcome';
// import Counter from './basics/Counter';
import Demo from './basics/Demo';
import Demonew from './basics/Demonew';
import List from './basics/List';


function App() {

  return (
    <div>
      <Navbar/>
      <hr/>
      <Header/>
      <hr/>
      <Contact st={{color:"red"}} name="first"/>
      <Contact st={{color:"blue"}} name="sec"/>
      <hr/>
      <Welcome title="heloooo guys (class component)"/>  
      <hr/>
      <Demo/>    
      <br/>
      <hr/>
      <Demonew/>   
      <hr/> 
      <List/>
      <hr/>     
    </div>
  );
}

export default App;

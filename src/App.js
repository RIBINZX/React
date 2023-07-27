import './App.css';
import Header from './Home';
import Navbar from './Navbar';
import Contact from './Contact';
import Welcome from './Welcome';
// import Counter from './Counter';
import Demo from './Demo';
import Demonew from './Demonew';
import List from './List';

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

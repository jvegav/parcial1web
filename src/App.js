import './App.css';
import AutenticationForm from './components/AutenticationForm';
import NavBar from './components/NavBar';
import { useState } from 'react';
import Robots from './components/Robots';


function App() {
  const [showRobots, setShowRobots] = useState(false);


  const handleSubmit = () => {
    setShowRobots(true);

  };

  return (
    <div className="App">
      <NavBar></NavBar>
      {showRobots ? <Robots /> : <AutenticationForm handleSubmit={handleSubmit} />}
      <footer>
        <p>Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
      </footer>
    </div>

  );
}

export default App;

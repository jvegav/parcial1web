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
    </div>

  );
}

export default App;

import './App.css';
import AutenticationForm from './components/AutenticationForm';
import NavBar from './components/NavBar';
import { useState } from 'react';
import Robots from './components/Robots';
import DetailRobot from './components/DetailRobot';
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  const [showRobots, setShowRobots] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [robot, setRobot] = useState(null);

  const handleSubmit = () => {
    setShowRobots(true);

  };

  const handleDetail = (robotDetail) => {
    console.log(robotDetail)
    setRobot(robotDetail)
    setShowDetail(true)
  }

  return (
    <div className="App">

      <NavBar />
      <Container className="mt-3">
        <Row>
          {showRobots ? (
            <Col md={6}>
              <Robots handleDetail={handleDetail} />
            </Col>
          ) : (
            <Col md={15}>
              <AutenticationForm handleSubmit={handleSubmit} />
            </Col>
          )}
          {showDetail ? (
            <Col md={6}>
              <DetailRobot robot={robot} />
            </Col>
          ) : (
            <Col></Col>
          )}
        </Row>
      </Container>


      <footer>
        <p>Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
      </footer>
    </div>

  );
}

export default App;

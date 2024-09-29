import './App.css';
import AutenticationForm from './components/AutenticationForm';
import NavBar from './components/NavBar';
import { useState } from 'react';
import Robots from './components/Robots';
import DetailRobot from './components/DetailRobot';
import { Container, Row, Col } from 'react-bootstrap';
import { IntlProvider, FormattedMessage } from 'react-intl';
import localeEsMessage from './locales/es';
import localeEnMessage from './locales/en';

function App() {
  const [showRobots, setShowRobots] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [robot, setRobot] = useState(null);


  const language = navigator.language.split(/[-_]/)[0];


  const messages = language === 'es' ? localeEsMessage : localeEnMessage;

  const handleSubmit = () => {
    setShowRobots(true);
    setShowDetail(false);
  };

  const handleDetail = (robotDetail) => {
    console.log(robotDetail);
    setRobot(robotDetail);
    setShowDetail(true);
  };

  return (
    <IntlProvider locale={language} messages={messages}>
      <div className="App">
        <NavBar />
        <Container className="mt-3">
          <Row>
            {showRobots ? (
              <Col md={8}>
                <Robots handleDetail={handleDetail} />
              </Col>
            ) : (
              <Col md={12}>
                <AutenticationForm handleSubmit={handleSubmit} />
              </Col>
            )}
            {showDetail && robot ? (
              <Col md={4}>
                <DetailRobot robot={robot} lenguaje={language} />
              </Col>
            ) : (
              <Col></Col>
            )}
          </Row>
        </Container>

        <footer>
          <p><FormattedMessage id="Contact Us" />: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
        </footer>
      </div>
    </IntlProvider>
  );
}

export default App;

import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap'
import { FormattedMessage } from 'react-intl';

function Robots({ handleDetail }) {

    const [robots, setRobots] = useState([]);
    useEffect(() => {
        const URL = "http://localhost:3001/robots";
        fetch(URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error al obtener los datos');
                }
                return response.json();
            })
            .then((data) => {
                setRobots(data);
                console.log(data)
            });
    }, []);


    return (
        <div className="container">

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th><FormattedMessage id="Name" /></th>
                        <th><FormattedMessage id="Model" /></th>
                        <th><FormattedMessage id="Manufacturing Company" /></th>
                    </tr>
                </thead>
                <tbody>
                    {robots.map((robot) => (
                        <tr key={robot.id} onClick={() => handleDetail(robot)} style={{ cursor: 'pointer' }}>
                            <td>{robot.id}</td> {/* Muestra el ID de la mascota */}
                            <td>{robot.nombre}</td>
                            <td>{robot.modelo}</td>
                            <td>{robot.empresaFabricante}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>

    );
}

export default Robots;
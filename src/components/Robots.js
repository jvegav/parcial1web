import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap'

function Robots() {

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
            <h2 className="mt-2">Listado de mascotas</h2>
            <hr></hr>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th> {/* Puedes agregar más columnas si es necesario */}
                        <th>Nombre</th>
                        <th>Modelo</th>
                        <th>Empresa Fabricante</th>
                    </tr>
                </thead>
                <tbody>
                    {robots.map((robot) => (
                        <tr key={robot.id}>
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
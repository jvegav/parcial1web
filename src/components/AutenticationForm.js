import Form from 'react-bootstrap/Form'
import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import './AutenticationForm.css'
import { Container } from 'react-bootstrap';

function AutenticationForm({ handleSubmit }) {
    const [formValues, setFormValues] = useState({ nombre: "", password: "" });


    const [loginError, setLoginError] = useState('');


    const handleNombreChange = (e) => {
        setFormValues({ ...formValues, nombre: e.target.value });
    };
    const handlePasswordChange = (e) => {
        setFormValues({ ...formValues, password: e.target.value });
    };



    const clickSubmit = async () => {
        // Si las credenciales son válidas, hace la petición POST

        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    login: formValues.nombre,
                    password: formValues.password,
                }),
            });

            if (response.status === 200) {
                const data = await response.json();
                handleSubmit(); // Puedes llamar tu función de manejo de éxito aquí
                setLoginError(''); // Resetea el mensaje de error en caso de éxito
                alert(data.message); // Muestra el mensaje de éxito recibido
            } else {
                setLoginError('Error de autenticación. Revise sus credenciales');
            }
        } catch (error) {
            setLoginError('Error de autenticación. Revise sus credenciales');
        }

    };

    const clickCancelar = () => {
        setFormValues({ nombre: '', password: '' });
        setLoginError('');
    };



    return (
        <>
            <h3 className='titulo-inicio'>Inicio De Sesion</h3>
            <Form className='form'>
                <Form.Group className="mb-6" controlId="formBasicEmail">
                    <Form.Label className='label'> Nombre de Usuario</Form.Label>
                    <Form.Control type="text" placeholder="Username" onChange={handleNombreChange} value={formValues.nombre} style={{ backgroundColor: 'rgb(216, 216, 216)', borderRadius: '0px' }} />
                </Form.Group>

                <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
                    <Form.Label className='label'>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} style={{ backgroundColor: 'rgb(216, 216, 216)', borderRadius: '0px' }} />
                </Form.Group>


                <Container className='container-buttons'>
                    <Button className='submit' variant="primary" onClick={clickSubmit} style={{ backgroundColor: 'blue', borderColor: 'blue', borderRadius: '0px', width: '190px', color: 'white', fontWeight: 'bold' }}>
                        Ingresar
                    </Button>
                    <Button className='cancelar' onClick={clickCancelar} style={{ backgroundColor: 'red', borderColor: 'red', borderRadius: '0px', marginLeft: '20px', width: '190px', color: 'black', fontWeight: 'bold' }}>
                        Cancelar
                    </Button>

                    {loginError && <h3 className='loginError'>{loginError}</h3>}
                </Container>
            </Form>
        </>
    );
}


export default AutenticationForm;
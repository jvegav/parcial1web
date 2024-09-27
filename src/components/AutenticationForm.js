import Form from 'react-bootstrap/Form'
import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import './AutenticationForm.css'

function AutenticationForm({ handleSubmit }) {
    const [formValues, setFormValues] = useState({ nombre: "", password: "" });

    const handleNombreChange = (e) => {
        setFormValues({ ...formValues, nombre: e.target.value });
    };
    const handlePasswordChange = (e) => {
        setFormValues({ ...formValues, password: e.target.value });
    };


    const [validationStates, setValidationStates] = useState({ nombre: false, password: false });

    function verifyStates() {
        let isValid = true;

        // Validación del campo nombre
        if (formValues.nombre !== 'Josue') {
            setValidationStates((prev) => ({ ...prev, nombre: true }));
            isValid = false;
        } else {
            setValidationStates((prev) => ({ ...prev, nombre: false }));
        }

        // Validación del campo contraseña
        if (formValues.password !== '123') {
            setValidationStates((prev) => ({ ...prev, password: true }));
            isValid = false;
        } else {
            setValidationStates((prev) => ({ ...prev, password: false }));
        }

        return isValid;
    }

    const clickSubmit = () => {
        if (verifyStates()) {
            handleSubmit();
        }
    };

    const clickCancelar = () => {
        setFormValues({ nombre: '', password: '' });
        setValidationStates({ nombre: false, password: false });
    };



    return (
        <>
            <h3>Inicio De Sesion</h3>
            <Form className='form'>
                <Form.Group className="mb-6" controlId="formBasicEmail">
                    <Form.Label> Nombre de Usuario</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={handleNombreChange} value={formValues.nombre} />
                    {validationStates.email && <Form.Text className="text-danger">Email is invalid.</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} />
                </Form.Group>



                <Button variant="primary" onClick={clickSubmit}>
                    Submit
                </Button>
                <Button variant="secondary" onClick={clickCancelar}>
                    Cancelar
                </Button>
                {validationStates.nombre ? <h3>Error de autenticación. Revise sus credenciales</h3> : validationStates.password ? <h3>Error de autenticación. Revise sus credenciales</h3> : <></>}
            </Form>
        </>
    );
}


export default AutenticationForm;
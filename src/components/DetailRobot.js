import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import './DetailRobot.css';

function DetailRobot({ robot, lenguaje }) {


    const [imagen, setImagen] = useState("");

    const adjustImageUrl = (url) => {
        return url.replace("github.com", "raw.githubusercontent.com").replace("/blob/", "/");
    };

    useEffect(() => {
        if (robot.imagen) {
            const newImageUrl = robot.imagen.includes("github.com")
                ? adjustImageUrl(robot.imagen)
                : robot.imagen;
            setImagen(newImageUrl);
        }
    }, [robot.imagen]);

    const handleImageError = (e) => {
        console.error("Error loading image:", e);
        setImagen("");
    };

    return (
        <Container className="robot-detail">
            <h5 className="robot-name">{robot.nombre}</h5>
            {imagen ? (
                <img
                    className="robot-image"
                    src={imagen}
                    alt="fotoRobot"
                    onError={handleImageError}
                />
            ) : (
                <p>No image available</p>
            )}
            <div className="robot-details">
                <p>➔ <strong><FormattedMessage id="Manufacture Year" />:</strong> {robot.añoFabricacion}</p>
                <p>➔ <strong><FormattedMessage id="Processing Capacity" /></strong>  {robot.capacidadProcesamiento}</p>
                <p>➔ <strong>Humor</strong> {robot.humor}</p>
            </div>
        </Container>
    );
}

export default DetailRobot;



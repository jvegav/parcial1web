import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";

function DetailRobot({ robot }) {
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
        console.log("Image element:", e.currentTarget);
        console.log("Source URL:", e.currentTarget.src);
        setImagen(""); // Cambia a una imagen alternativa o deja vacío
    };

    return (
        <Container style={{ backgroundColor: "wheat", width: "200px", height: "200px" }}>
            <h5>{robot.nombre}</h5>
            <h5>{robot.empresaFabricante}</h5>
            {imagen ? (
                <img
                    src={imagen}
                    alt="fotoRobot"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                    onError={handleImageError}
                />
            ) : (
                <p>No image available</p>
            )}
        </Container>
    );
}

export default DetailRobot;



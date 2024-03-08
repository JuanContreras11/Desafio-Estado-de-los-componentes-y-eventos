const Alert = ({ error,diferencia }) => {
    if (diferencia) {
        return <p>Las Contraseñas no coinciden</p> ;
    } else if (error) {
        return <p>Todos los campos son obligatorios</p>;
    } else {
        return <p>Registro Exitoso</p>;
    }
};

export default Alert;

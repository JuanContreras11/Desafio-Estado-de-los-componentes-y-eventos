import { useState } from "react";
import Alert from "./Alert";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [repassword,setRepassword] = useState("");
  const [error, setError] = useState(false);
  const [diferencia, setDiferencia] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (nombre === "" || email === "" || password === "") {
      setError(true);
      return;
    }else if (password != repassword){
      setDiferencia(true);
      return;
    }
    setError(false);
  };

  return (
    <>
      <form className="formulario" onSubmit={validarDatos}>
        <div className="form-group  my-4">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="form-group my-4">
         
          <input
            type="text"
            name="email"
            placeholder="tuemail@ejemplo.com"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group  my-4">
          <input
            type="text"
            name="Password"
            placeholder="Contraseña"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group my-4">
          <input
            type="text"
            name="rePassword"
            placeholder="Confirma tu contraseña"
            className="form-control"
            onChange={(e) => setRepassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Enviar
        </button>
        {submitted && <Alert error={error} diferencia={diferencia} />}
      </form>
    </>
  );
};

export default Formulario;

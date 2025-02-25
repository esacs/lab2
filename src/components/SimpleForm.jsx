import { useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    matricula: 'A00834393',
    nombre: 'Elit',
    apellidos: 'Acosta Pastrana',
    edad: '21',
    universidad: 'ITESM',
    carrera: 'ITC',
  });

  const { matricula, nombre, apellidos, edad, universidad, carrera } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formState);
  };

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Matricula"
          name="matricula"
          value={matricula}
          onChange={onInputChange}
        />
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Nombre"
          name="nombre"
          value={nombre}
          onChange={onInputChange}
        />
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Apellidos"
          name="apellidos"
          value={apellidos}
          onChange={onInputChange}
        />
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Edad"
          name="edad"
          value={edad}
          onChange={onInputChange}
        />
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Universidad"
          name="universidad"
          value={universidad}
          onChange={onInputChange}
        />
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Carrera"
          name="carrera"
          value={carrera}
          onChange={onInputChange}
        />

        <button type="submit" className="btn btn-primary mt-3">
          Enviar
        </button>
      </form>

      <h2 className="mt-4">Contenido del Formulario:</h2>
      <p><strong>Matrícula:</strong> {matricula}</p>
      <p><strong>Nombre:</strong> {nombre}</p>
      <p><strong>Apellidos:</strong> {apellidos}</p>
      <p><strong>Edad:</strong> {edad}</p>
      <p><strong>Universidad:</strong> {universidad}</p>
      <p><strong>Carrera:</strong> {carrera}</p>

      {matricula === 'A00834393' && <Message />}
    </>
  );
};

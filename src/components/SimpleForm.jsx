import {useEffect, useState} from 'react';
import {Message} from './Message';

export const SimpleForm = () => {

        const [formState, setFormState] = useState({
        matricula: 'A00834393',
        nombre: 'Elit',
        apellidos: 'Acosta Pastrana',
        edad: "21",
        universidad: 'ITESM',
        carrera: 'ITC'


        });
        const { matricula, nombre, apellidos, edad, universidad, carrera } = formState;
        const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({...formState, [ name ]: value
        });
        }
        useEffect( () => {
        // console.log('useEffect called!');
        }, []);
        useEffect( () => {
        // console.log('formState changed!');
        }, [formState]);
        useEffect( () => {
        // console.log('email changed!');
        }, [ nombre ]);


  return (
    <>
        <h1>Formulario Simple</h1><hr />
        <input type="text" className="form-control" placeholder="Matricula" name="Matricula"
        value={ matricula }
        onChange={ onInputChange }
        />
        <input type="nombre" className="form-control mt-2" placeholder="Elit" name="nombre"
        value={ nombre }
        onChange={ onInputChange }
        />
        <input type="text" className="form-control-3" placeholder="Acosta Pastrana" name="Apellidos"
        value={ apellidos }
        onChange={ onInputChange }
        />
        <input type="text" className="form-control-4" placeholder="21" name="Edad"
        value={ edad }
        onChange={ onInputChange }
        />
        <input type="text" className="form-control-5" placeholder="ITESM" name="Universidad"
        value={ universidad }
        onChange={ onInputChange }
        />
        <input type="text" className="form-control-6" placeholder="ITC" name="Carrera"
        value={ carrera }
        onChange={ onInputChange }
        />
        {
        (matricula === 'A00834393' ) && <Message />
        }
        
    </>
  )
}

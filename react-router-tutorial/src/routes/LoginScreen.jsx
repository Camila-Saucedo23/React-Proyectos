import React from 'react'
import { useForm } from './hooks/useForm';

export const LoginScreen = () => {

    const initialForm = {
        nombre: "",
        tecnologia: "",
        email: "",
        redes: ""
    }


    const { formState, nombre, tecnologia, email, redes, onInputChange } = useForm(initialForm)
    const{setUsuario} = useContext(UsuarioContext)

    const onSubmit = (e) => {
        e.preventDefault()
        setUsuario(formState)
    }

    return (
        <>
            <form className='container' onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="nombre" >Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nombre"
                        value={nombre}
                        onInputChange={onInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="tecnologia" >Tecnologia</label>
                    <input
                        type="text"
                        className="form-control"
                        name="tecnologia"
                        value={tecnologia}
                        onInputChange={onInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={email}
                        onInputChange={onInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="redes" >Redes</label>
                    <input
                        type="text"
                        className="form-control"
                        name="redes"
                        value={redes}
                        onInputChange={onInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Registrar usuario</button>
            </form>
        </>

    )
}

import { useState } from 'react'


export const AgregarTarea = ({agregarTareas}) => {

    const [imputValue, setImputValue] = useState('')
    const onInputChange = (event) => {
        setImputValue(event.target.value)

    }
    const onSubmit = (event) => {
        event.preventDefault()
        agregarTareas(imputValue)
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text"
                placeholder="Ingresá tarea nueva"
                value={imputValue}
                onChange={onInputChange}
            />
        </form>

    )
}

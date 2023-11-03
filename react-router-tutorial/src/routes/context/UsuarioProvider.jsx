import React, { useState } from 'react'
import { UsuarioContext } from './UsuarioContext'

// const usuario = {
//     nombre: "camila",
//     tecnologia: "react",
//     email: "cami@gmail",
//     redes: "@camiS"
// }

const [usuario, setUsuario] = useState({})

export const UsuarioProvider = ({ children }) => {
    return (
        <UsuarioContext.Provider value={{usuario, setUsuario}}>
            {children}
        </UsuarioContext.Provider>
    )
}

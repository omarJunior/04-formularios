import React, { useState } from 'react'

export const FormularioComponent = () => {

    const [usuario, setUsuario] = useState({})

    const conseguirDatos = (e)=>{
        e.preventDefault()
        let datos = e.target
        let usuario = {
            nombre: datos.nombre.value,
            apellidos: datos.apellidos.value,
            genero: datos.genero.value,
            biografia : datos.biografia.value,
            enviar: datos.enviar.value,
        }
        setUsuario(usuario)
    }

    console.log(usuario)

    const cambiarDatos = (e)=>{        
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

  return (
    <div className="div-formulario">
        <h2>Formularios con react</h2>
        <form onSubmit={(e)=> conseguirDatos(e)}>
            <input
                type="text" 
                placeholder='Nombres'
                name='nombre'
                onChange={cambiarDatos}  
            />

            <input
                type="text" 
                placeholder='Apellidos' 
                name='apellidos' 
                onChange={cambiarDatos}
            />
            <select name="genero"  onChange={cambiarDatos}>
                <option selected>--Seleccione--</option>
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
            </select>

            <textarea name="biografia"  onChange={cambiarDatos} placeholder='Biografia'></textarea>

            <input type="submit" value="Enviar" name="enviar" />
        </form>
        {
            usuario.enviar && (
                <div className="info_usuario">
                    <p>Nombres: {usuario.nombre}</p>
                    <p>Apellidos: {usuario.apellidos}</p>
                    <p>Genero: {usuario.genero}</p>
                    <label for="biografia">Biografia:</label>
                    <p id="biografia">
                       {usuario.biografia}
                    </p>
                </div>
            )
        }
    </div>
  )
}

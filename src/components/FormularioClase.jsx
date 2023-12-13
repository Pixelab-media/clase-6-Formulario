import { useState } from "react"

const FormularioClase = () => {

    // const [ nombre, setNombre ] = useState("")
    // const [ edad, setEdad ] = useState("")
    // const [ genero, setGenero ] = useState("")
    // const [ pais, setPais ] = useState("")

    const estadoInicial = {nombre: "", edad: "", genero: "", pais: ""}
    
    const [datosFormulario, setDatosFormulario ] = useState (estadoInicial)
    const [error, setError ] = useState (estadoInicial)

    // console.log(datosFormulario)
    // const [ error, setError ] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        // let errores = {...estadoInicial}
        // Object.keys(datosFormulario).map(key=> {
        //     if(datosFormulario[key]==""){
        //         errores = {
        //             ...errores,
        //             [key]: `Rellene el campo ${key}`}
        //     }
        // })
        // setError({...errores})
        
    }

    const handleBlur = () =>{
        let errores = {...estadoInicial}
        Object.keys(datosFormulario).map(key=> {
            if(datosFormulario[key]==""){
                errores = {
                    ...errores,
                    [key]: `Rellene el campo ${key}`}
            }
        })
        setError({...errores})
    }

    const handleChange = (e) =>{
 
        setDatosFormulario({
            ...datosFormulario,
            [e.target.name]: e.target.value
        })
    }


  return (

    <>
        <h1>Poné en adopcion tu mascota</h1>
        
        <form onSubmit={handleSubmit}>
            <label> Nombre de la mascota
                <input 
                className={error.nombre ? "error" : "input"}
                type="text" 
                onBlur={handleBlur}
                name="nombre"
                value={datosFormulario.nombre} 
                onChange={handleChange}
                />
                {error.nombre && <h4 className="error-texto">{error.nombre}</h4>}
            </label>
            <br/>
            <label> Edad de la mascota
                <input 
                className={error.edad ? "error" : "input"}
                type="number" 
                name="edad" 
                onBlur={handleBlur}
                value={datosFormulario.edad} 
                onChange={handleChange}
                />
                {error.edad && <h4 className="error-texto">{error.edad}</h4>}
            </label>
            <br/>
            <label className={error.genero && "error-texto"}> Genero de la mascota
                Masculino: 
                <input 
                type="radio" 
                value="masculino" 
                name="genero"
                onChange={handleChange}
                checked={datosFormulario.genero === "masculino"}
                />
                Femenino: 
                <input 
                type="radio" 
                value="femenino"
                name="genero"
                onChange={handleChange}
                checked={datosFormulario.genero === "femenino"}
                />
                No se: 
                <input 
                type="radio" 
                value="desconozco"
                name="genero"
                onChange={handleChange}
                checked={datosFormulario.genero === "desconozco"}
                />
                {error.genero&& <h4 className="error-texto">{error.genero}</h4>}
            </label>
            <br/>
            <label> Pais de la mascota
                <select 
                className={error.pais ? "error" : "input"}
                name="pais"
                onBlur={handleBlur}
                onChange={handleChange}
                value={datosFormulario.pais}
                >
                    <option value="vacio"> Seleccione el pais</option>
                    <option value="chi"> Chile</option>
                    <option value="arg"> Argentina</option>
                    <option value="uru"> Uruguay</option>
                </select>
                {error.pais && <h4 className="error-texto">{error.pais}</h4>}
            </label>
            <br/>

            <input type="submit" value="Enviar" />
        </form>
    </>

  );
}

export default FormularioClase;
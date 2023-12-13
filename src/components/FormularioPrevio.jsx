import { useState } from "react"

const Formulario = () => {

    const [ valorInput, setValorInput ] = useState("")
    const [ valorCheck, setValorCheck ] = useState("")
    const [ valorSelect, setValorSelect ] = useState("")
    const [ valorRadio, setValorRadio ] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    const handleChange = (e) =>{
        // console.log("estas en el input")
        // console.log(e.target.value)
        setValorInput(e.target.value)
    }

    const handleChangeCheckbox = (e) =>{
        console.log(e.target.checked) //ver diferencia
        // console.log(e.target.value) //ver diferencia
        e.target.checked ? setValorCheck("presente") : setValorCheck ("ausente")
    }

    const handleChangePais = (e) =>{
        console.log(e.target.value)
        setValorSelect(e.target.value)  
        if (e.target.value === "chi"){
            setValorSelect("Chile")
        } else  if (e.target.value === "arg"){
            setValorSelect("Argentina")
        } else if (e.target.value === "bra"){
            setValorSelect("Brasil")
        }
    }

    const handleChangeRadio = (e) =>{
        setValorRadio(e.target.value)
    }


    return (
      <form onSubmit={handleSubmit}>
        {/* input tipo text */}
        <input type="text" name="nombre" onChange={handleChange}/>
        <p>{valorInput}</p>

        {/* checkbox */}
        <span>Asistencia</span>
        <input type="checkbox" name="asistencia" onChange={handleChangeCheckbox}/>
        <p>El alumno esta: {valorCheck}</p>

        {/* select */}
        <label>Pais
            <select onChange={handleChangePais}>
                <option value="chi">Chile</option>
                <option value="arg">Argentina</option>
                <option value="bra">Brasil</option>
            </select>
        </label>
        <p>Pais: {valorSelect}</p>

        {/* Radio */}
        <label> Animal Favorito
            <input onChange={handleChangeRadio} type="radio" name="animal" value="perro" />Perro
            <input onChange={handleChangeRadio} type="radio" name="animal" value="gato" />Gato
        </label>
        <p>Animal favorito: {valorRadio}</p>
        <input type="submit" value="Enviar" />
      </form>
    );
  }
  
  export default Formulario;
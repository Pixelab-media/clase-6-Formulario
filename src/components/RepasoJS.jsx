

function RepasoJS() {

    // const array = [1,2,3,4]
    // const copia = array
    // copia.push(5)

    // console.log("Array", array)
    // console.log("copia", copia)
// ------------
    // const array = [1,2,3,4]
    // const copia = [...array]
    // copia.push(5)

    // console.log("Array", array)
    // console.log("copia", copia)
//--------------
    // const objeto = { nombre: "Rodrigo" }
    // const copiaObjeto = {...objeto}

    // const array = [1,2,3,4]
    // const otroArray = [5,6,7,8,9]
    // console.log(array.concat(otroArray))
//--------------
    // const array = [1,2,3,4]
    // const numero = 5
    // const otroArray = [6,7,8,9]

    // // array.push(numero)
    // // console.log(array.concat(otroArray))
    // const todoUnido = [...array, numero, ...otroArray]
    // console.log(todoUnido)
//-------------
    // const alumno = {
    //     nombre: "Rodrigo",
    //     apellido: "Villarroel"
    // }
    // const conocimientos = {
    //     principal: "Visual",
    //     secudario: "react"
    // }

    // const nuevo = {
    //     nombre: alumno.nombre,
    //     apellido: alumno.apellido,
    //     conocimientoPrincipal: conocimientos.principal,
    //     conocimientoSecundario: conocimientos.secudario
    // }

    // const nuevo = {
    //     ...alumno,
    //     ...conocimientos,
    // }
    //   console.log(nuevo)
    //----------------------

    // const alumno = {
    //     nombre: "Rodrigo",
    //     apellido: "Villarroel"
    // }

    // const variable = "apellido"

    // // console.log(alumno.nombre)
    // console.log(alumno[variable])

    //spread operator -->copiar, unir array, unir objetos
    //notacion de corchetes --> entre otras coss usar variables


    //----------
    //Desestructuracion:
    // const array = [ 1, 2, 3, 4, 5 ]
    // const [ num1, num2, num5 ] = array

    // const numeroUno = array[0]
    // const numeroDos = array[1]
    // const numeroCinco = array[4]

    // console.log(numeroUno)


    // const alumno = {
    //     nombre: "Rodrigo",
    //     apellido: "Villarroel"
    // }

    // const { apellido, nombre  } = alumno

    // const nombre = alumno.nombre

    //------
    //     const alumno = {
    //     name: "Rodrigo",
    //     apellido: "Villarroel"
    // }

    // const { apellido, name: nombre  } = alumno

    // console.log(nombre)

    //-----
     
    // const variable = "pais"
    
    // const profesor = {
    //     nombre: "Emiliano",
    //     apellido: "Rotta",
    //     [variable]: "Argentina"
    // }

    // console.log(profesor)

    // const profesor = {
    //     nombre: "Emiliano",
    //     apellido: "Rotta",
    //     edad: 30
    // }

    // // profesor.map(p=>console.log(p))
    // Object.keys(profesor).map(p=>console.log(p))
    // Object.values(profesor).map(p=>console.log(p))

  return (
    <div>
        Ir descomentando uno a uno mientras ves la clase grabada
    </div>
  );
}

export default RepasoJS;
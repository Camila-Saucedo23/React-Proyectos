import "./PrimerComponente.css"

const string = "Esto es un texto"
const number = 153426486759
const array = ["Hola grupo", "Somos muchos", 10]
const boolean = true
const funcion = () => 1 + 1
const objeto = { nombre: "Curso con pao", duracion: 4 }
const fecha = new Date()
export const PrimerComponente = ({ titulo, subtitulo }) => {
  return (
    <>
      <h1>{titulo} </h1>
      <h2>  {subtitulo} </h2>
      {/*<h1>Variables en JSX</h1>
     <h3>String</h3> <p> {string} </p>
    <h3>number</h3> <p> {number} </p>
    <h3>array</h3> <p> {array} </p>
    <h3>Boolean</h3> <p> {boolean} </p>
    <h3>funcion</h3> <p> {funcion()} </p>
    <h3>objeto</h3> <p> {JSON.stringify(objeto)} </p>
    <h3>fecha</h3> <p> {JSON.stringify(fecha)} </p> */}
    </>
  )
}





import { useState } from "react"

export const BuscadorPeliculas = () => {

    const API_KEY = 'afb3c72bf0e4093c83c12d02e7c7a30a'
    const [busqueda, setBusqueda] = useState('')
    const [peliculas, setPeliculas] = useState([])

    const handleInputChange = (e) => {
        setBusqueda(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        fetchPeliculas()
    }
    const fetchPeliculas = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${busqueda}`)
            const data = await response.json()
            setPeliculas(data.results)
        } catch (error) {
            console.error('Ha ocurrido un error: ', error)
        }
    }

    return (
        <div className="container">
            <h1 className="title">Buscador Peliculas</h1>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder="Escribi una pelicula"
                    value={busqueda}
                    onChange={handleInputChange}
                />
                <button type="submit" className="search-button">Buscar</button>
            </form>
            <div className="movie-list">
                {peliculas.map((pelicula) => (
                    <div key={pelicula.id} className="movie-card">
                        <img src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} alt={pelicula.title} className="movie-poster" />
                        <h2 className="movie-title">{pelicula.title}</h2>
                        <p className="movie-release-date">{pelicula.release_date}</p>
                        <p className="movie-overview">{pelicula.overview}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

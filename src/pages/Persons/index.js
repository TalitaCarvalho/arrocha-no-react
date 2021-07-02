import { useEffect, useState } from 'react'

import './style.css'

function Persons () {
    const URL = 'https://rickandmortyapi.com/api/character'
    const [data, setData] = useState([])
    const [person, setPerson] = useState('')
    const [filtered, setFiltered] = useState([])

    useEffect(() => {
        async function fetchData () {
            const response = await fetch(URL)
            const result = await response.json()
            setData(result.results)
            setFiltered(result.results)
        }
        fetchData();
    }, [])

    async function search (e) {
        setPerson(e.target.value)
        if (e.target.value) {
            const response = await fetch(`${URL}?name=${e.target.value}`)
            const { results } = await response.json()
            setFiltered(results)
            return
        }

        setFiltered(data)
    }

    return (
        <>
            <div className="content">
                <div className="search-area">
                    <input className="search-input" placeholder="Buscar Personagem" value={person} onChange={search}></input>
                </div>

                <div className="persons-area">
                    {filtered.map(val => <div className="card" key={val.id}>
                        <div className="card-title">{val.name}</div>
                        <img src={val.image} alt="Imagem Personagem" />
                        <div>
                            <div>
                                <div style={val.status === 'Dead' ? { color: 'red' } : { color: 'green' }}>{val.status}</div>
                                <div>Espécie: {val.species}</div>
                                <div>Gênero: {val.gender}</div>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </>
    )

}

export default Persons

import React, { useState, useEffect } from 'react';

//* Styles
import './character.css';

const Character = () => {

    const [characters, setCharacters] = useState([]);

    const fetchApi = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        let jsonData = await response.json();
        setCharacters(jsonData.results);
    };

    useEffect(() => {
        fetchApi();
    }, []);

    return (
        <section>
            <div className="container-fluid">
                <div className="characters-container">
                    {
                        characters.map(item => (
                            <div className="character-box" key={item.id}>
                                <img src={item.image} alt={item.name}/>
                                <div className="character">
                                    <h3 className="name">{item.name}</h3>
                                    <p className="specie">{item.species}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Character;
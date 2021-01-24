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
                <div className="row">
                    {
                        characters.map(item => (
                            <div className="col-12 col-lg-5 character-box" key={item.id}>
                                <div className="row">
                                    <div className="col-12 col-sm-6 image">
                                        <img src={item.image} alt={item.name}/>
                                    </div>
                                    <div className="col-12 col-sm-6 character">
                                        <h3 className="name">{item.name}</h3>
                                        <p className="specie">{item.species}</p>
                                        <p className="gender">{item.gender}</p>
                                        <p className="origin">{item.origin.name}</p>
                                    </div>
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
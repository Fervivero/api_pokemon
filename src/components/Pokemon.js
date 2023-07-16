import React, { useState } from "react";

const Pokemon = () => {
    const [lista, setLista] = useState([]);

    const traerDatos = () => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(resultado => {
                const listaPokemon = resultado.results;
                const listTemp = [...lista];

                for (let i = 0; i < listaPokemon.length; i++) {
                    const pokemonObj = listaPokemon[i];
                    listTemp.push(pokemonObj);
                }

                console.log(listTemp);
                setLista(listTemp);
            })
            .catch(error => {
                console.log(error);
            });
    };
return (
    <div>
        <button onClick={traerDatos}>Fetch Pokemon</button>
        <hr/>
        <h3>Lista de pokemones</h3>
        {lista.map((item, index) => (
            <div key={index}>
                <p>{index + 1}.{item.name}</p>
            </div>
        ))}
    </div>
);
};

export default Pokemon;

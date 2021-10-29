import React from "react";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";
import { BASE_POKEMON_URL } from "./constants";
import useAxios from "./hooks/useAxios";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const [pokemon, addPokemon, clearPokemon] = useAxios(BASE_POKEMON_URL);

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemon} />
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map((cardData) => (
          <PokemonCard key={cardData.id} {...cardData} />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;

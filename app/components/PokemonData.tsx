import React from "react";
import Link from "next/link";

export interface Pokemon {
  name: string;
  url: string;
}

interface PokemonResult {
  count: number;
  results: Pokemon[];
}

// Insert Query
interface Props {
  query: string;
}

const PokemonData = async ({ query }: Props) => {
  // Fetching results from API
  // Returns the count and array of results
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1302");
  const pokemons: PokemonResult = await res.json();

  const pokemonList =
    query === ""
      ? pokemons.results
      : pokemons.results.filter((pokemon) =>
          pokemon.name.includes(query.toLowerCase())
        );

  return (
    <>
      <div>
        <ul>
          {pokemonList.map((pokemon) => {
            var url = "/" + pokemon.name;
            return (
              <li key={pokemon.name}>
                <Link href={url}>
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default PokemonData;

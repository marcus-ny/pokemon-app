import Link from "next/link";
import React from "react";
import Image from "next/image";
import AddToRoster from "./AddToRoster";
import RemoveFromRoster from "./RemoveFromRoster";

interface Props {
  params: { pokemon: string };
}

const PokemonPage = async ({ params: { pokemon } }: Props) => {
  var pokemonURL = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
  const result = await fetch(pokemonURL);
  const current: { id: number; sprites: { front_default: string } } =
    await result.json();

  var spriteURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
    current.id +
    ".png";

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div>
          <Link href="/">
            <button className="btn btn-primary">Back To Menu</button>
          </Link>
        </div>
        <div>
          <Image
            src={spriteURL}
            width="500"
            height="500"
            alt={"POKEMON"}
          ></Image>
        </div>

        <div>
          <AddToRoster
            pokemonName={pokemon}
            pokemonId={current.id}
            imageUrl={spriteURL}
          ></AddToRoster>
        </div>
        <div>
          <RemoveFromRoster
            pokemonName={pokemon}
            pokemonId={current.id}
            imageUrl={spriteURL}
          ></RemoveFromRoster>
        </div>
      </div>
    </>
  );
};

export default PokemonPage;
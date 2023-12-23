"use client";
import React, { useContext } from "react";
import { RosterData } from "../contexts/RosterContext";
import Link from "next/link";
import Image from "next/image";

const PokemonRoster = () => {
  const { roster } = useContext(RosterData);
  return (
    <div>
      <div>
        <h1 className="font-bold">Current Roster</h1> {roster.length}/6
      </div>
      <div>
        <ul className="divide-y divide-gray-300">
          {roster.map((pokemon) => (
            <li className="py-2" key={pokemon.id}>
              <div>
                <div>
                  <Link href={pokemon.name}>
                    {pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)}
                  </Link>
                </div>
                <div>
                  <Image
                    src={pokemon.imageUrl}
                    alt={`${pokemon.name} Image`}
                    height={30}
                    width={30}
                  ></Image>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonRoster;

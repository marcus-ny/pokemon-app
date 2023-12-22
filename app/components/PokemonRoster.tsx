"use client";
import React, { useContext } from "react";
import { RosterData } from "./RosterContext";
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
                  <Link href={pokemon.name}>{pokemon.name}</Link>
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

/*<table className="table">
        <tbody>
          {roster.map((pokemon) => (
            <tr key={pokemon.id}>
              <td className="p-4">
                <Link href={pokemon.name}>{pokemon.name}</Link>
              </td>
              <td>
                <Image
                  src={pokemon.imageUrl}
                  alt={`${pokemon.name} Image`}
                  height={10}
                  width={10}
                ></Image>
              </td>
            </tr>
          ))}
        </tbody>
      </table>*/

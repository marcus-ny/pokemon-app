"use client";
import React, { useContext } from "react";
import { RosterData } from "../contexts/RosterContext";

interface Props {
  pokemonName: string;
  pokemonId: number;
  imageUrl: string;
}
const RemoveFromRoster = ({ pokemonName, pokemonId, imageUrl }: Props) => {
  const { removeFromRoster } = useContext(RosterData);

  const handleClickRemove = () => {
    removeFromRoster(pokemonName, pokemonId, imageUrl);
  };
  return (
    <button className="btn bg-red-500" onClick={handleClickRemove}>
      Remove From Roster
    </button>
  );
};

export default RemoveFromRoster;

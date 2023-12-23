"use client";
import React, { useContext } from "react";
import { RosterData } from "../contexts/RosterContext";

interface Props {
  pokemonName: string;
  pokemonId: number;
  imageUrl: string;
}

const AddToRoster = ({ pokemonName, pokemonId, imageUrl }: Props) => {
  const { addToRoster } = useContext(RosterData);

  const handleClickAdd = () => {
    // console.log("adding" + pokemonName);
    addToRoster(pokemonName, pokemonId, imageUrl);
  };

  return (
    <button className="btn btn-primary" onClick={handleClickAdd}>
      Add To Roster
    </button>
  );
};

export default AddToRoster;

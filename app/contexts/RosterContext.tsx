"use client";
import React, { useState, createContext, ReactNode } from "react";

interface listedPokemon {
  name: string;
  id: number;
  imageUrl: string;
}

interface RosterContextProps {
  //roster: string[];
  roster: listedPokemon[];
  addToRoster: (name: string, id: number, imageUrl: string) => void;
  removeFromRoster: (name: string, id: number, imageUrl: string) => void;
}

export const RosterData = createContext<RosterContextProps>({
  roster: [],
  addToRoster: () => {},
  removeFromRoster: () => {},
});

const RosterContext = ({ children }: { children: ReactNode }) => {
  //const [roster, setRoster] = useState<string[]>([]);
  const [roster, setRoster] = useState<listedPokemon[]>([]);
  const addToRoster = (pname: string, pid: number, pimageUrl: string) => {
    const newPokemon = { name: pname, id: pid, imageUrl: pimageUrl };
    if (
      roster.length < 6 &&
      !roster.some((pokemon) => pokemon.name === pname)
    ) {
      console.log("adding this " + pname + " in Roster bar");
      setRoster((prevRoster) => [...prevRoster, newPokemon]);
    } else {
      if (roster.length >= 6) console.log("Roster is at max capacity of 6!");
      else console.log("Pokemon you selected is already in Roster");
    }
  };

  const removeFromRoster = (name: string, id: number, imageUrl: string) => {
    setRoster((prevRoster) =>
      prevRoster.filter((pokemon) => pokemon.id !== id)
    );
  };

  return (
    <RosterData.Provider value={{ roster, addToRoster, removeFromRoster }}>
      {children}
    </RosterData.Provider>
  );
};

export default RosterContext;

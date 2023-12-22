"use client";

import React, { ReactNode, useContext } from "react";
import SearchBar from "./SearchBar";

interface Props {
  children: ReactNode;
}

const MainPage = ({ children }: Props) => {
  return (
    <div>
      <SearchBar placeholder="Search Pokemon"></SearchBar>
      <div>{children}</div>
    </div>
  );
};

export default MainPage;

"use client";

import React, { createContext, useContext } from "react";
import { Dawning_of_a_New_Day } from "next/font/google";

const dawning = Dawning_of_a_New_Day({ subsets: ["latin"], weight: "400" });

const FontContext = createContext({ dawning });

export const FontProvider = ({ children }: { children: React.ReactNode }) => (
  <FontContext.Provider value={{ dawning }}>{children}</FontContext.Provider>
);

export const useFonts = () => useContext(FontContext);

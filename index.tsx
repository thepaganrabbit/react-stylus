import React from "react";
import { ThemeBuilder } from "./lib/ThemeBuilder";

export const ReactStylusProvider = React.createContext<ThemeBuilder | null>(
  null
);

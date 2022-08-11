import React from 'react'
import { ReactStylus } from './ReactStylus'

export const ReactStylusProvider = React.createContext<ReactStylus | null>(null)

export * from './ReactStylus';

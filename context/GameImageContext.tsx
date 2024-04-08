'use client';
import React, { ReactNode, createContext, useContext, useState } from 'react';

type GameImageContextProps = {
    children: ReactNode;
};

type GameImageContext = {
    gameImage: string;
    setGameImage: React.Dispatch<React.SetStateAction<string>>;
};

export const GameImageContext = createContext<GameImageContext | null>(null);

export function GameImageProvider({ children }: GameImageContextProps) {
    const [gameImage, setGameImage] = useState('');

    return (
        <GameImageContext.Provider value={{ gameImage, setGameImage }}>
            {children}
        </GameImageContext.Provider>
    );
}

export const useGameImageContext = () => {
    const context = useContext(GameImageContext);
    if (!context) {
        throw new Error(
            'useBackgroundImageContext must be used within a BackgroundImageContextProvider'
        );
    } else {
        return context;
    }
};

// contexts/CounterContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CounterContextType {
    count: number;
    incrementCount: () => void;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const CounterProvider = ({ children }: { children: ReactNode }) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => setCount(prevCount => prevCount + 1);

    return (
        <CounterContext.Provider value={{ count, incrementCount, setCount }}>
            {children}
        </CounterContext.Provider>
    );
};

export const useCounter = () => {
    const context = useContext(CounterContext);
    if (!context) {
        throw new Error('useCounter must be used within a CounterProvider');
    }
    return context;
};

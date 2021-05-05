import { createContext } from 'react';

const navContext = createContext({});

export function NavProvider({ value, children }) {
    return (
        <navContext.Provider value={value}>
            {children}
        </navContext.Provider>
    );
}
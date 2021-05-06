import { createContext, useState, useContext } from 'react';

export const MainContext = createContext({});

export function MainProvider({ children }) {
    let [ abrirOpcoesSaldo, setAbrirOpcoesSaldo] = useState(false);

    function toggleOpcoes() {
        setAbrirOpcoesSaldo(abrirOpcoesSaldo = !abrirOpcoesSaldo);
    }

    return (
        <MainContext.Provider value={
            { abrirOpcoesSaldo, setAbrirOpcoesSaldo, toggleOpcoes }
        }>
            { children }
        </MainContext.Provider>
    );
} 

// export function useMain() {
//     const { abrirOpcoesSaldo, setAbrirOpcoesSaldo, toggleOpcoes } = useContext(MainContext);
//     return;
// }

// Não consegui usar o context
import styles from './styles.module.scss';

import { 
    Details, 
    Diviser, 
    Account, 
    Saldo, 
    InputArea, 
    PanelUser, 
    UserImage,
    TogglePainelOptions
} from '../UI';

import { useState } from 'react';

export default function Header() {
    let [ mostrarSaldo, setMostrarSaldo ] = useState(true);

    function toggleSaldo() {
        setMostrarSaldo(mostrarSaldo = !mostrarSaldo);
    }

    let [ abrirOpcoesSaldo, setAbrirOpcoesSaldo] = useState(false);

    function toggleOpcoes() {
        setAbrirOpcoesSaldo(abrirOpcoesSaldo = !abrirOpcoesSaldo);
    }


    return (
        <>
            <header id={styles.header} role="header">
                <div id={styles.parteConta}>
                    <Details/>
                    <Diviser/>
                    <Account
                        logica={abrirOpcoesSaldo}
                        toggleOpcoes={toggleOpcoes}
                    />
                    <Saldo
                        logica={mostrarSaldo}
                        toggleSaldo={toggleSaldo}
                    />
                </div>
                <div id={styles.parteUsuario}>
                    <InputArea/>
                    <PanelUser/>
                    <UserImage/>
                </div>
            </header>
            <TogglePainelOptions logica={abrirOpcoesSaldo}/>
        </>
    );
}
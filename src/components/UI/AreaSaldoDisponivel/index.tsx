import styles from './styles.module.scss';

import { useState } from 'react';

export default function AreaSaldoDisponivel({ saldo }) {
    let [ mostrarSaldo, setMostrarSaldo ] = useState(true);

    function toggleSaldo() {
        setMostrarSaldo(mostrarSaldo = !mostrarSaldo);
    }

    return (
        <div id={styles.container}>
            <img src="/ShieldCheck.svg" alt="Saldo Disponivel"/>
            <div id={styles.text}>
                <span id={styles.title}>Saldo disponível</span>
                {
                    mostrarSaldo
                    ?
                    <span 
                        className={styles.colorGreen}
                    >R${saldo}</span>
                    :
                    <span
                        className={styles.colorGreen}
                    >R$XX.XXX,XX</span>

                }
            </div>
            {
                mostrarSaldo
                ?
                <img
                    onClick={() => toggleSaldo()}
                    src="/eyeNoMark.svg"
                    alt="Mostrar"
                />
                :
                <img
                    onClick={() => toggleSaldo()}
                    src="/eyeMark.svg"
                    alt="Mostrar"
                />
            }
        </div>
    );
}
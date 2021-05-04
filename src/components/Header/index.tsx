import styles from './styles.module.scss';

import { useState } from 'react';

export default function Header() {
    let [ mostrarSaldo, setMostrarSaldo ] = useState(true);
    function toggleSaldo() {
        setMostrarSaldo(mostrarSaldo = !mostrarSaldo);
    }
    return (
        <header id={styles.header} role="header">
            <div id={styles.details}>
                <div className={styles.logo}>
                    <div id={styles.logoIcon}>
                        <img
                            src="./iconPartOne.svg"
                            alt="icon-parte-um"
                        />
                        <img
                            src="./iconPartTwo.svg"
                            alt="icon-parte-dois"
                        />
                    </div>
                    <p>
                        <span id={styles.logoNameDual}>Dual</span>
                        <span id={styles.logoNameBank}>bank</span>
                    </p>
                </div>
            </div>
            <div id={styles.space}></div>
            <div id={styles.account}>
                <div id={styles.option}>
                    <span id={styles.text}>
                        Conta Corrente
                    </span>
                    <img
                        src="/iconSeta.svg"
                        alt="seta-icon" 
                    />
                </div>
                <div id={styles.option}>
                    <span id={styles.dataBanco}>
                        Ag. 00005-1
                    </span>
                    <span id={styles.dataBanco}>
                        C.C. 00000000000000000020-1
                    </span>
                    <img
                        src="/CopySimple.svg"
                        alt="icon-copy"
                    />
                </div>
            </div>
            <div id={styles.saldo}>
                <div id={styles.saldoText}>
                    <span>Saldo</span>
                    {
                        mostrarSaldo
                        ?
                        <img
                            src="/eyeNoMark.svg"
                            alt="mostrar saldo"
                            onClick={() => toggleSaldo()}
                        />
                        :
                        <img
                            src="/eyeMark.svg"
                            alt="mostrar saldo"
                            onClick={() => toggleSaldo()}
                        />
                    }
                </div>
                {
                    mostrarSaldo
                    ?
                    <span className={styles.colorSaldo}>R$40.000,00</span>
                    :
                    <span className={styles.colorSaldo}>R$xx.xxx,xx</span>
                }
            </div>
        </header>
    );
}
import styles from './styles.module.scss';

import { Title, ButtonSaldo, DataSaldo, WindowBottomBar, ButtonWindow, AreaSaldoDisponivel } from '../UI';

import { useState } from 'react';

export default function Main() {
    let [ abrirLogicaJanela, setAbrirLogicaJanela ] = useState(false);
    let [ abrirStringJanela, setAbrirStringJanela ] = useState("containerFechar");

    const arrayButton = [
        { 
            iconWhite: "/PrinterWhite.svg",
            iconNormal: "/PrinterNormal.svg",
            id: 0
        },
        {
            iconWhite: "/FileArrowDownWhite.svg",
            iconNormal: "/FileArrowDownNormal.svg",
            id: 1
        },
        {
            iconWhite: "/ShareNetworkWhite.svg",
            iconNormal: "/ShareNetworkNormal.svg",
            id: 2
        }
    ]

    function toggleJanela() {
        setAbrirLogicaJanela(abrirLogicaJanela = !abrirLogicaJanela);
        setAbrirStringJanela(
            abrirStringJanela === "containerJanela"
            ?
            abrirStringJanela = "containerFechar"
            :
            abrirStringJanela = "containerJanela"
        )
    }

    return (
        <div id={styles.containerMain}>
            <div id={styles.barTop}>
                <Title>Saldo Bancário</Title>

                <div id={styles.listaBotoes}>
                    {
                        arrayButton.map(e => {
                            return (
                            <ButtonSaldo
                                srcImageWhite={e.iconWhite}
                                srcImageNormal={e.iconNormal}
                                key={e.id}
                            />)
                        })
                    }
                </div>
            </div>
            <div id={styles.bottomBar}>
                <DataSaldo 
                    abrirOpcoes={abrirLogicaJanela}
                    toggleJanela={toggleJanela}    
                />
                <AreaSaldoDisponivel
                    saldo="40.000,00"
                />
                <WindowBottomBar
                    saldoDisponibilizado="20.000,00"
                    saldoDistribuido="12.050,00"
                    classNameToggle={abrirStringJanela}
                >
                    <ButtonWindow>
                        Alterar
                    </ButtonWindow>
                </WindowBottomBar>
            </div>
        </div>
    );
}
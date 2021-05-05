import styles from './styles.module.scss';

// import Link from 'next/link';

import { useState } from 'react';

import { LinkNav, BotaoNav, ColumnItemNav, NavDetailsIcon } from '../UI';
import { NavProvider } from '../../Provider/navProvider';

export default function Nav() {
    let [ abrirNav, setAbrirNav ] = useState("fecharNav");
    
    let [ booleanBotao, setBooleanBotao ] = useState(false);

    let [ mostrarTexto, setMostrarTexto ] = useState(false);
    
    function AbrirNavBar() {
        setMostrarTexto(mostrarTexto = !mostrarTexto)
        setAbrirNav(
            abrirNav === "abrirNav"
            ?
            abrirNav = "fecharNav"
            :
            abrirNav = "abrirNav"        
        )
        setBooleanBotao(booleanBotao = !booleanBotao);
    }
    // /HouselineWhite.svg
    // /HouseLine.svg
    return (
        // <NavProvider value={{ mudancaCor, mudarCor, mostrarTexto, stringCor}}>

            <div id={styles.navMain}
                className={styles[abrirNav]}
            >
                <ColumnItemNav
                    mostrarTexto={mostrarTexto}
                    linkIconWhite="/HouselineWhite.svg"
                    linkIconNormal="/HouseLine.svg"
                    texto="Inicial"
                />
                <ColumnItemNav
                    mostrarTexto={mostrarTexto}
                    linkIconWhite="/ChartPieSliceWhite.svg"
                    linkIconNormal="/ChartPieSliceNormal.svg"
                    texto="Gráfico"
                />
                <ColumnItemNav
                    mostrarTexto={mostrarTexto}
                    linkIconWhite="/ChartLineUpWhite.svg"
                    linkIconNormal="/ChartLineUpNormal.svg"
                    texto="Histórico"
                />
                <ColumnItemNav
                    mostrarTexto={mostrarTexto}
                    linkIconWhite="/MoneyWhite.svg"
                    linkIconNormal="/MoneyNormal.svg"
                    texto="Dinheiro"
                />
                <ColumnItemNav
                    mostrarTexto={mostrarTexto}
                    linkIconWhite="/HandshakeWhite.svg"
                    linkIconNormal="/HandshakeNormal.svg"
                    texto="Negócio"
                />
                <ColumnItemNav
                    mostrarTexto={mostrarTexto}
                    linkIconWhite="/GroupWhite.svg"
                    linkIconNormal="/GroupNormal.svg"
                    texto="Organização"
                />
                <ColumnItemNav
                    mostrarTexto={mostrarTexto}
                    linkIconWhite="/CreditCardWhite.svg"
                    linkIconNormal="/CreditCardNormal.svg"
                    texto="Créditos"
                />
                <ColumnItemNav
                    mostrarTexto={mostrarTexto}
                    linkIconWhite="/ReceiptWhite.svg"
                    linkIconNormal="/ReceiptNormal.svg"
                    texto="Mensagem"
                />
                <ColumnItemNav
                    mostrarTexto={mostrarTexto}
                    linkIconWhite="/WrenchWhite.svg"
                    linkIconNormal="/WrenchNormal.svg"
                    texto="Configuração"
                />
                <ColumnItemNav
                    mostrarTexto={mostrarTexto}
                    linkIconWhite="/QuestionWhite.svg"
                    linkIconNormal="/QuestionNormal.svg"
                    texto="Ajuda"
                />
                <BotaoNav
                    abrirNav={booleanBotao}
                    ToggleNav={AbrirNavBar}
                />
            </div>
        // </NavProvider>
    );


}
import styles from './styles.module.scss';

import { Title, ButtonSaldo, DataSaldo, WindowBottomBar, ButtonWindow, AreaSaldoDisponivel } from '../UI';

import { useState, useEffect } from 'react';

export default function Main() {
    let [ abrirLogicaJanela, setAbrirLogicaJanela ] = useState(false);
    
    let [ abrirStringJanela, setAbrirStringJanela ] = useState("containerFechar");

    let [ salvarArquivo, setSalvarArquivo ] = useState(false);

    function salvarPdf() {
        setSalvarArquivo(salvarArquivo = !salvarArquivo);
        setTimeout(() => {
            salvarArquivo = false;
        }, 1000)
    }

    const arrayButton = [
        { 
            iconWhite: "/PrinterWhite.svg",
            iconNormal: "/PrinterNormal.svg",
            id: 0,
            acao: () => {},
        },
        {
            iconWhite: "/FileArrowDownWhite.svg",
            iconNormal: "/FileArrowDownNormal.svg",
            id: 1,
            acao: () => salvarPdf(),
        },
        {
            iconWhite: "/ShareNetworkWhite.svg",
            iconNormal: "/ShareNetworkNormal.svg",
            id: 2,
            acao: () => {},
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

    useEffect(() => {

        let clipboard = new Promise((resolve, reject) => {
            if(navigator.clipboard.readText()) {
                resolve('Deu certo');
            } else {
                reject('Não deu certo');
            }
        })

        const codigo1 = window.document.getElementsByClassName('codigo1')[0]

        const codigo2 = window.document.getElementsByClassName('codigo2')[0]
        
        codigo1.addEventListener('click', async () => {
            navigator.clipboard.writeText(codigo1.innerHTML);

        })

        codigo2.addEventListener('click', () => {
            navigator.clipboard.writeText(codigo2.innerHTML);
        })

        const codigo3 = window.document.getElementById('imageCopiarColar');

        codigo3.addEventListener('click', () => {
            navigator.clipboard.writeText(`${codigo1.innerHTML} ${codigo2.innerHTML}`);
        })

        const notification1 = window.document.getElementsByClassName('notification1')[0];

        console.log(notification1);

        const pdfMake = require('pdfmake');

        const paginaPdf = window.document.getElementsByClassName("paginaPdf")[0].innerHTML;

        // console.log(paginaPdf)
        if(salvarArquivo) {
            let janela = window.open('', '', 'width=800,height=600');
            janela.document.write('<html><head>');
            janela.document.write('<title>PDF</title></head>');
            janela.document.write('<body>');
            janela.document.write(paginaPdf);
            janela.document.write('</body>');
            janela.document.write('</body></html>');
            janela.document.close();
            janela.print();
        }


    }, [salvarArquivo])

    return (
        <div 
            id={styles.containerMain}
            className="paginaPdf"
        >
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
                                acao={e.acao}
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
            {/* <Notification
                classe="notification1"
            >
                Número da agência copiado.
            </Notification> */}
            
        </div>
    );
}
import styles from './styles.module.scss';

type BancoOptionType = {
    tipoConta: string;
    texto1: string;
    texto2: string;
}

function BancoOption({ tipoConta, texto1, texto2 }: BancoOptionType) {
    return (
        <div id={styles.optionBancoPanel}>
        <span>{tipoConta}</span>
            <div id={styles.optionBancoData}>
                <span className={styles.dataBancoPanel}>
                    {texto1}
                </span>
                <span className={styles.dataBancoPanel}>
                    {texto2}
                </span>
            </div>
        </div>
    );
}

export default function TogglePainelOptions({ logica }) {
    const dadosAgencia = [
        {
            tipoConta: "Conta Corrente",
            texto1: "Ag. 00005-1",
            texto2: "C.C. 00000000000000000020-1",
        },
        {
            tipoConta: "Conta Poupança",
            texto1: "Ag. 00005-1",
            texto2: "C.C. 01010010001000010000-2",
        },
        {
            tipoConta: "C.C. Ed. Suzano",
            texto1: "Ag. 00005-1",
            texto2: "C.C. 000000000000015-1",
        },
        {
            tipoConta: "C.C. Condomínio Guillermo",
            texto1: "Ag. 00005-1",
            texto2: "C.C. 00000000000000017-1",
        },
        {
            tipoConta: "C.C. Residencial Figma ômega",
            texto1: "Ag. 00005-1",
            texto2: "C.C. 0000000000000000019-1",
        }
    ]
    return (
        <div>
            {
                logica
                ?
                <div 
                    className={styles.abrirPanelOption}
                    id={styles.panelOptions}
                >
                    {
                        dadosAgencia.map(item => {
                            return (
                                <BancoOption
                                    tipoConta={item.tipoConta}
                                    texto1={item.texto1}
                                    texto2={item.texto2}
                                />
                            )
                        })
                    }
                </div>  
                :
                <div 
                    className={styles.fecharPanelOption}
                    id={styles.panelOptions}
                    
                >
                    <div id={styles.optionBancoPanel}>
                        <span>Conta Corrente</span>
                        <div id={styles.optionBancoDataFechar}>
                            <span className={styles.dataBancoPanelFechar}>
                                Ag. 00005-1
                            </span>
                            <span className={styles.dataBancoPanelFechar}>
                                C.C. 00000000000000000020-1
                            </span>
                        </div>
                    </div> 
                </div>  
            }
        </div>
    )
}
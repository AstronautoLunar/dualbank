import styles from './styles.module.scss';

// import { useEffect } from 'react';

type TypeAbrirOpcoesSaldo = {
    logica: boolean;
    toggleOpcoes: () => void;
}


export default function Account({ logica, toggleOpcoes }: TypeAbrirOpcoesSaldo) {


    return (
        <div id={styles.account}>
            <div id={styles.dataAccountBanco}>
                <span id={styles.text}>
                    Conta Corrente
                </span>
                {
                    logica
                    ?
                    <img
                        onClick={() => toggleOpcoes()}
                        src="/iconSeta.svg"
                        alt="seta-icon"
                        className={styles.opcoesAbertas}
                    />
                    :
                    <img
                        onClick={() => toggleOpcoes()}
                        src="/iconSeta.svg"
                        alt="seta-icon"
                        className={styles.opcoesFechadas} 
                    />
                }
            </div>
            <div id={styles.dataAccountBanco}>
                <div 
                    className={styles.textoConta}
                >
                    <img 
                        src="/iconPopoverCopiar.svg" 
                        alt="janela copiar"
                        id={styles.pop1}
                    />
                    <span 
                        id={styles.dataBanco}
                        className="codigo1"
                    >
                        Ag. 00005-1
                    </span>
                </div>
                <div className={styles.textoConta}>
                    <img 
                        src="/iconPopoverCopiar.svg" 
                        alt="janela copiar"
                        id={styles.pop2}
                    />
                    <span 
                        id={styles.dataBanco}
                        className="codigo2"
                    >
                        C.C. 00000000000000000020-1
                    </span>
                </div>
                <div id={styles.image}>
                    <img
                        src="/iconPopCopiarTudo.svg"
                        alt="pop-copiar-tudo"
                    />
                    <img
                        src="/CopySimple.svg"
                        alt="icon-copy"
                        id="imageCopiarColar"
                    />
                </div>
            </div>
        </div>
    );
}
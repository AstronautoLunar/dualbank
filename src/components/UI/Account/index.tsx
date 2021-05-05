import styles from './styles.module.scss';

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
    );
}
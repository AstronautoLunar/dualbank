import styles from './styles.module.scss';

import IconLoading from '../IconLoading';

export default function DataSaldo({ abrirOpcoes, toggleJanela }) {
    return (
        <>
            <div id={styles.containerDataSaldo}>
                <div id={styles.dataSaldoText}>
                    <span>Data do Saldo</span>
                    <span>07/12/2020</span>
                </div>
                {
                    abrirOpcoes
                    ?
                    <img
                        onClick={() => toggleJanela()}
                        className={styles.imageRotate} 
                        src="/CaretDown.svg"    alt="Seta"
                    />
                    :
                    <img
                        onClick={() => toggleJanela()} 
                        src="/CaretDown.svg" alt="Seta"/>

                }
            </div>
            <div id={styles.textSaldo}>
                <span>Saldo atualizado às 16:48</span>
                <IconLoading loading={false}/>
            </div>
        </>
    );
}
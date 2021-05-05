import styles from './styles.module.scss';

type SaldoType = {
    logica: boolean
    toggleSaldo: () => void;
}

export default function Saldo({ logica, toggleSaldo }: SaldoType) {
    return (
        <div id={styles.saldo}>
            <div id={styles.saldoText}>
                <span>Saldo</span>
                {
                    logica
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
                logica
                ?
                <span className={styles.colorSaldo}>R$40.000,00</span>
                :
                <span className={styles.colorSaldo}>R$xx.xxx,xx</span>
            }
        </div>
    );
}
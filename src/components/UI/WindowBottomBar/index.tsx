import styles from './styles.module.scss';

type WindowBottomBarType = {
    saldoDistribuido: string;
    saldoDisponibilizado: string;
    children: any;
    classNameToggle: string;
}

export default function WindowBottomBar({ saldoDistribuido, saldoDisponibilizado, children, classNameToggle }: WindowBottomBarType) {
    return (
        <div 
            id={styles.container}
            className={styles[classNameToggle]}
        >

            <div className={styles.columnSaldo}>

                <span className={styles.titleSaldo}>Disponibilizado</span>

                <span className={styles.textWindow}>
                    <span
                        className={styles.color}
                    >R${ saldoDisponibilizado }</span> do seu saldo
                </span>

            </div>

            <div className={styles.columnSaldo}>

                <span className={styles.titleSaldo}>Distribuído</span>

                <span className={styles.textWindow}>

                    <span
                        className={styles.color}
                    >R${ saldoDistribuido }</span> do seu saldo

                </span>

            </div>
            {
                children
            }
        </div>
    );
}
import styles from './styles.module.scss';


export default function Header() {
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
        </header>
    );
}
import styles from './styles.module.scss';

export default function Details() {
    return (
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
    );
}
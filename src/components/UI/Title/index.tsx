import styles from './styles.module.scss';

export default function Title({ children }) {
    return (
        <div id={styles.containerTitle}>
            <span>{ children }</span>
        </div>
    );
}
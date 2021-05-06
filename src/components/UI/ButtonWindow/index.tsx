import styles from './styles.module.scss';

type ButtonWindowType = {
    children: string;
}

export default function ButtonWindow({ children }: ButtonWindowType) {
    return (
        <div id={styles.buttonWindow}>
            <span>{ children }</span>
        </div>
    )
}
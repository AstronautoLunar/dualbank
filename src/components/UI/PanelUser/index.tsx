import styles from './styles.module.scss';

export default function PanelUser() {
    return (
        <div id={styles.PanelUser}>
            <img src="/ChatText.svg" alt="ChatText"/>
            <img src="/Calendar.svg" alt="ChatText"/>
            <img src="/Bell.svg" alt="ChatText"/>
        </div>
    );
}
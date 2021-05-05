import styles from './styles.module.scss';

export default function InputArea() {
    return (
        <div id={styles.inputArea}>
            <input 
                type="text" 
                placeholder="Pesquisar"
            />
            <img src="/magnifyingGlassIcon.svg" alt="Search"/>
        </div>
    );
}

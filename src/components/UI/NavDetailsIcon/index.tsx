import styles from './styles.module.scss';

type NavDetailsIconType = {
    nomeIcon: string;
    mostrarTexto: boolean;
    cor: string;
}

export default function NavDetailsIcon({ nomeIcon, mostrarTexto, cor }: NavDetailsIconType) {
    return (
        <div>
            {
                mostrarTexto
                ?
                <div 
                    id={styles.container}
                    className={styles[cor]}
                >
                    <span>{nomeIcon}</span>
                </div>
                :
                <div></div>
            }
        </div>
    );
}
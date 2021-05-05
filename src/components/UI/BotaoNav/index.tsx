import styles from './styles.module.scss';

type BotaoNavType = {
    abrirNav: boolean;
    ToggleNav: () => void;
}

export default function BotaoNav({ abrirNav, ToggleNav }: BotaoNavType) {
    return (
        <div 
            id={styles.buttonStyle}
            onClick={() => ToggleNav()}    
        >
            {
                abrirNav
                ?
                <img
                    className={styles.navAberta}
                    src="/CaretRight.svg"
                    alt="setaNav"
                />
                :
                <img
                    className={styles.navFechada}
                    src="/CaretRight.svg"
                    alt="setaNav"
                />

            }
        </div>
    );
}
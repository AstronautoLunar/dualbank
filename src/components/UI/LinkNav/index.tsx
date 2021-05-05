import styles from './styles.module.scss';


type LinkNavType = {
    linkIconWhite: string;
    linkIconNormal: string;
    selecionado: boolean;
    selecionar: () => void;
}

export default function LinkNav({ linkIconWhite, linkIconNormal, selecionado, selecionar }: LinkNavType) {
    return (
        <div id={styles.itemIcon}>
            {
                selecionado
                ?
                <div 
                    id={styles.areaIcon}
                    onClick={() => selecionar()}>
                    <img 
                        src="/itemLateral2.svg"
                        alt="Item lateral do icon"    
                    />
                    <div
                        className={styles.bgColorOn}
                    >
                        <img 
                            src={ linkIconWhite }
                            alt="icon"
                        />
                        
                    </div>
                    <img 
                        src="/itemLateral1.svg" alt="Item lateral do icon"
                    />
                </div>
                :
                
                <div 
                    id={styles.areaIcon} 
                    onClick={() => selecionar()}>
                    <div
                        className={styles.bgColorOff} 
                        id={styles.icon}
                        >
                        <img 
                        src={ linkIconNormal }
                        alt="icon"
                        />
                    </div>
                </div>
            }
        </div>
    );
}
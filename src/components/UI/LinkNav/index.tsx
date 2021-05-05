import styles from './styles.module.scss';

import { useState } from 'react';

type LinkNavType = {
    linkIconWhite: string;
    linkIconNormal: string;
}

export default function LinkNav({ linkIconWhite, linkIconNormal }: LinkNavType) {
    let [ selecionado, setSelecionado ] = useState(false);

    function selecionar() {
        setSelecionado(selecionado = !selecionado);
    }

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
import styles from './styles.module.scss';

import { useState } from 'react';

type ButtonSaldoType = {
    srcImageWhite: string;
    srcImageNormal: string;
}

export default function ButtonSaldo({ srcImageWhite, srcImageNormal }: ButtonSaldoType) {
    let [ CorImage, setCorImage ] = useState(false);

    let [ styleButton, setStyleButton ] = useState(false)

    function mudarCor() {
        setCorImage( CorImage = !CorImage);
        setStyleButton( styleButton = !styleButton );
    }

    return (
        <div 
            id={styles.buttonContainer}
            className={styles[
                styleButton
                ?
                "mudarRoxo"
                :
                "mudarBranco"
            ]}
            onClick={() => mudarCor()}
        >
            {
                CorImage
                ?
                <img src={srcImageWhite} alt="icon-home"/>
                :
                <img src={srcImageNormal} alt="icon-home"/>

            }
        </div>
    );
}
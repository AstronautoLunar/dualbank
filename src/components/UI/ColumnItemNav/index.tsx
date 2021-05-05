import styles from './styles.module.scss';

import { useState } from 'react';

import LinkNav from '../LinkNav';
import NavDetailsIcon from '../NavDetailsIcon';

export default function ColumnItemNav({ mostrarTexto, linkIconWhite, linkIconNormal, texto }) {
    let [ mudancaCor, setMudancaCor ] = useState(false);

    function mudarCor() {
        setMudancaCor(mudancaCor = !mudancaCor);
        setStringCor(
            stringCor === "containerColorOn"
            ?
            stringCor = "containerColorOff"
            :
            stringCor = "containerColorOn"
        );
    }

    let [ stringCor, setStringCor ] = useState("containerColorOff");

    return (
        <div id={styles.column}>
            <LinkNav
                linkIconWhite={linkIconWhite}
                linkIconNormal={linkIconNormal}
                selecionado={mudancaCor}
                selecionar={mudarCor}
            />
            <NavDetailsIcon
                nomeIcon={texto}
                mostrarTexto={mostrarTexto}
                cor={stringCor}
            />
        </div>
    )
}
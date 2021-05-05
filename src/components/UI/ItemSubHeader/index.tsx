import styles from './styles.module.scss';

import { useState } from 'react';

type ItemSubHeaderType = {
    imageLetra: string;
    nomeTipoConta: string;
    valorConta: string;
    linearGradient: {
        color1: string;
        color2: string;
    };
}

export default function ItemSubHeader({ imageLetra , nomeTipoConta, valorConta, linearGradient }: ItemSubHeaderType) {

    let [ mostrarDinheiro, setMostrarDinheiro ] = useState(true);

    function mostrarDinheiroFunc() {
        setMostrarDinheiro(mostrarDinheiro = !mostrarDinheiro);
    }

    return (
        <div id={styles.container}>

            <div
                style={{ background: `linear-gradient(89.96deg, ${linearGradient.color1} 0.06%, ${linearGradient.color2} 99.94%)`}}
                id={styles.imageTipoDinheiro}>

                <span>{ imageLetra }</span>

            </div>

            <div id={styles.barraConta}>

                <div id={styles.topBarraConta}>
                    <span>{ nomeTipoConta }</span>

                    {
                        mostrarDinheiro
                        ?
                        <img 
                            onClick={() => mostrarDinheiroFunc()}
                            src="/eyeNoMark.svg"alt="mostrar"/>
                        :
                        <img 
                            onClick={() => mostrarDinheiroFunc()}
                            src="/eyeMark.svg"
                            alt="esconder"/>

                    }
                </div>
                
                {
                    mostrarDinheiro
                    ?
                    <span 
                        className={styles.moneyColor}
                    >{ valorConta }</span>
                    :
                    <span
                        className={styles.moneyColor}
                    >R$xx.xxx.xx</span>
                }

            </div>

        </div>
    )
}
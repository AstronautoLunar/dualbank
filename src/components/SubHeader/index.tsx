import styles from './styles.module.scss';

import { ButtonMain, ItemSubHeader } from '../UI';

export default function SubHeader() {
    return (
        <div id={styles.containerSubHeader}>
            <div id={styles.buttonsSubHeader}>
                <ButtonMain src="/tag.svg"/>
                <ButtonMain src="/PlusCircle.svg"/>
            </div>
            <div id={styles.divisaoMoney}>
                <ItemSubHeader
                    imageLetra="P"
                    nomeTipoConta="Principal"
                    valorConta="R$10.000,00"
                    linearGradient={
                        {
                            color1: '#622EE5',
                            color2: '#172765',
                        }
                    }
                />
                <ItemSubHeader
                    imageLetra="A"
                    nomeTipoConta="Aluguel"
                    valorConta="R$1.600,00"
                    linearGradient={
                        {
                            color1: '#778899',
                            color2: '#172765',
                        }
                    }
                />
                <ItemSubHeader
                    imageLetra="A"
                    nomeTipoConta="Alimentacão"
                    valorConta="R$450,00"
                    linearGradient={
                        {
                            color1: '#FF354E',
                            color2: '#172765',
                        }
                    }
                />
            </div>
        </div>
    );
}

/**
 * imageLetra , nomeTipoConta, valorConta, linearGradient
 */
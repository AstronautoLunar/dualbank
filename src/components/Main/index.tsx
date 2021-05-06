import styles from './styles.module.scss';

import { Title, ButtonSaldo } from '../UI';

export default function Main() {
    return (
        <div id={styles.containerMain}>
            <div id={styles.barTop}>
                <Title>Saldo Bancário</Title>

                <div id={styles.listaBotoes}>
                    <ButtonSaldo
                        srcImageWhite="/PrinterWhite.svg"
                        srcImageNormal="/PrinterNormal.svg"
                    />
                    <ButtonSaldo
                        srcImageWhite="/FileArrowDownWhite.svg"
                        srcImageNormal="/FileArrowDownNormal.svg"
                    />
                    <ButtonSaldo
                        srcImageWhite="/ShareNetworkWhite.svg"
                        srcImageNormal="/ShareNetworkNormal.svg"
                    />
            </div>
            </div>
        </div>
    );
}
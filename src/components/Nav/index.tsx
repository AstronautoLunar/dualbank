import styles from './styles.module.scss';

// import Link from 'next/link';

import { LinkNav } from '../UI';

export default function Nav() {
    return (
        <div id={styles.navMain}>
            <LinkNav
                linkIconWhite="/HouselineWhite.svg"
                linkIconNormal="/HouseLine.svg"
            />
        </div>
    );
}
import styles from '../styles/home.module.scss';

import { SubHeader } from '../components';

export default function Home() {
  return (
    <div id={styles.main}>
      <SubHeader/>
    </div>
  )
}

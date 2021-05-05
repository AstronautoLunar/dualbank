import styles from './styles.module.scss';

export default function ButtonMain({ src }) {
    return (
        <div id={styles.buttonMain}>
            <img src={src}/>
        </div>
    );
}
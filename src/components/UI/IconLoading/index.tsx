import styles from './styles.module.scss';

export default function IconLoading({ loading }) {
    return (
        <div>
            {
                loading
                ?
                <div 
                    id={styles.iconLoading}
                    className={styles.animationRefreshing}
                ></div>
                :
                <div
                    id={styles.iconLoading}
                ></div>
            }
        </div>
    );
}
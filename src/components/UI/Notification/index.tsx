import styles from './styles.module.scss';

type NotificationType = {
    children: any;
    classe: string;
}

export default function Notification({ children, classe }: NotificationType) {
    return (
        <div 
            id={styles.notificationContainer}
            className={classe}    
        >
            <span>{ children }</span>
        </div>
    );
}
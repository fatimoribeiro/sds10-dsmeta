import './styles.css';
import icon from '../../assets/img/notification-icon.svg';

function NotificationButton() {
    return (
        <div className="dsmeta-notification-btn">
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton;
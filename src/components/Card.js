import styles from './Card.module.css'
export default function Card({img, title, text})
{
    return(
        <div className={styles.card}>
            <img className={styles.card_image}  src={img} alt="profile picture"></img>
            <h2 className={styles.card_title}>{title}</h2>
            <p className={styles.card_text}>{text}</p>
        </div>
    )
}
import styles from './Card.module.css'
export default function Card()
{
    return(
        <div className={styles.card}>
            <img className={styles.card_image}  src="https://via.placeholder.com/150" alt="profile picture"></img>
            <h2 className={styles.card_title}>Ai chaves</h2>
            <p className={styles.card_text}>description of your own card</p>
        </div>
    )
}
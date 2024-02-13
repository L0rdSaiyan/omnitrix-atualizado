import styles from './Footer.module.css'
export default function Footer()
{

    function getYear()
    {
        return new Date().getFullYear()
    }

    return(
        <div className={styles.footer_container}>
            <footer>
                <p>&copy; Your website name {getYear()} </p>
            </footer>
        </div>
    )
}
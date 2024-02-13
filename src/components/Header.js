import styles from './Header.module.css';
export default function Header()
{
    return(

        <div className={styles.header_container}>
            <header>
                <h1>My Website</h1>
                <nav>
                    <ul>
                        <li>Busco siegzo</li>
                        <li>ai chaves</li>
                        <hr></hr>
                    </ul>
                </nav>
            </header>
        </div>
        
    )
}
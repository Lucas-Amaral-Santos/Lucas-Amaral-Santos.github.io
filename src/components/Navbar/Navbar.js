import styles from './Navbar.module.css';

function Navbar() {

    return (
        <div className={styles.navbar}>
            <ul className={styles.navList}>
                <li className={styles.navListItem}><a href='#sobre' className={styles.navLink}>Sobre mim</a></li>
                <li className={styles.navListItem}><a href='#educacao' className={styles.navLink}>Educação</a></li>
                <li className={styles.navListItem}><a href='#profissao' className={styles.navLink}>Experiências Profissionais</a></li>
                <li className={styles.navListItem}><a href='#projetos' className={styles.navLink}>Projetos</a></li>
                <li className={styles.navListItem}><a href='#contato' className={styles.navLink}>Contato</a></li>
            </ul>
        </div>

    );
}

export default Navbar;
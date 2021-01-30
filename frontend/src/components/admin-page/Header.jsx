import styles from '../../styles/Header.module.css'

function Header(props) {

    return (
        <div className={styles.header} style={{ width: "100%"}}>
            <div className={styles.center} style={{ width: "100%"}}>
                <h3>Ecommerce Admin</h3>
            </div>
            <div className={styles.rightAdmin}>
                <a href="/" className={styles.linkAdmin}>
                    <span>Voltar ao site</span>
                </a>
            </div>
        </div>
    )
}

export default Header
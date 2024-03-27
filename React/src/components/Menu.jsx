import styles from './Menu.module.css'

export default function Menu() {
    return(
        <div className={styles.menuDiv}>
            <p><a href={'/'}>Cards</a></p>
            <p><a href={'/contact'}>Contato</a></p>
        </div>
    )
}
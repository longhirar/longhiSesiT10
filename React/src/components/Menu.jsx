import styles from './Menu.module.css'

export default function Menu() {
    return (
        <div className={styles.menuDiv}>
            <p><a href={'/'}><span className="material-symbols-outlined">
                home
            </span></a></p>
            <p><a href={'/contact'}>Contato</a></p>
            <p><a href={'/calc'}>Cálculo</a></p>
        </div>
    )
}
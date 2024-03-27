import styles from './Calc.module.css';

import Menu from "./components/Menu";

export default function Calc() {
    return(
        <>
            <Menu/>
            <div className={styles.calcDiv}>
                <h1 className={styles.calcHeader}>Cálculos</h1>
            </div>
        </>
    )
}
import { useEffect, useState } from 'react';
import styles from './Calc.module.css';

import Menu from "./components/Menu";

export default function Calc() {
    const [numero1, setNumero1] = useState();
    const [numero2, setNumero2] = useState();
    const [respSoma, setRespSoma] = useState();
    const [respSub, setRespSub] = useState();
    const [respMulti, setRespMulti] = useState();
    const [respDiv, setRespDiv] = useState();

    useEffect(()=> {
        if(numero1 !== undefined && numero2 !== undefined) {
            setRespSoma(numero1 + numero2);
            setRespSub(numero1 - numero2);
            setRespMulti(numero1 * numero2);
            setRespDiv(numero1 / numero2);
        }
    })

    return(
        <>
            <Menu/>
            <div className={styles.calcDiv}>
                <h1 className={styles.calcHeader}>Cálculos</h1>
                <div>
                    <label htmlFor="n1">Numero 1</label>
                    <input type="number" id='n1' value={numero1} onChange={e=> {setNumero1(parseFloat(e.target.value))}} />
                </div>
                <div>
                    <label htmlFor="n2">Numero 2</label>
                    <input type="number" id='n2' value={numero2} onChange={e=> {setNumero2(parseFloat(e.target.value))}} />
                </div>
                <div>
                    <div>
                        <h1>Soma</h1>
                        {respSoma}
                    </div>
                    <div>
                        <h1>Subtração</h1>
                        {respSub}
                    </div>
                    <div>
                        <h1>Multiplicação</h1>
                        {respMulti}
                    </div>
                    <div>
                        <h1>Divisão</h1>
                        <span className="resultDiv" data-resp={respDiv} onClick={e=>{e.target.value = respDiv}}>
                            {respDiv.toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
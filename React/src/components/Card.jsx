import style from './Card.module.css'

import { Tilt } from 'react-tilt'

export default function Card(props) {
    const defaultOptions = {
        reverse:        false,  // reverse the tilt direction
        max:            35,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed:          150,   // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "ease",    // Easing on enter/exit.
    }
    return (
        <Tilt options={defaultOptions} className={style.card}>
                <h2>{props.title}</h2>
                <img src={props.img} alt={props.alt || "Paisagem"} width={300} height="auto" />
                <p>{props.desc}</p>
                <p className={style.cardPrice}>R$ {props.price}</p>
        </Tilt>
    )
}
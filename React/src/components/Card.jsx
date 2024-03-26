export default function Card(props) {
    return (
        <div className="card-wrap">
            <h2>{props.title}</h2>
            <img src={props.img} alt={props.alt || "Paisagem"} width={300} height="auto" />
            <p>{props.desc}</p>
            <p className="card-price">R$ {props.price}</p>
        </div>
    )
}
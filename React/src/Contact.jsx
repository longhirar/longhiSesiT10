import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import Menu from './components/Menu'

import styles from './Contact.module.css'

export default function Contact() {
    const position = [-25.4248583,-49.2728628]


    return (
        <>
            <Menu />
            <div className={styles.contactDiv}>
                <h1>Contato</h1>
                <div>
                    <h2>Mapa</h2>
                    <div>
                        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width: "100vw", height:'80vh'}}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position}>
                                <Popup>
                                    
                                    Colégio SESI Centro
                                    <br />
                                    <a href="https://www.google.com/maps/place/Col%C3%A9gio+Sesi+-+Unidade+Centro/@-25.4248583,-49.2728628,19z/data=!4m6!3m5!1s0x94dce43e26a836af:0xe6bf3c798353b759!8m2!3d-25.4249647!4d-49.272303!16s%2Fg%2F1tdqcqpf?entry=ttu">Ver no Google Maps</a>
                                    <br />
                                    <br />
                                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Rick Astley - Never Gonna Give You Up (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{width: '20rem', height: '15rem'}}></iframe>
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
        </>
    )
}
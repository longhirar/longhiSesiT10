import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import Menu from './components/Menu'

import styles from './Contact.module.css'
import { useState } from 'react';

export default function Contact() {
    const position = [-25.4248583,-49.2728628]

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const handleZap = () => {
        // todo
    }

    return (
        <>
            <Menu />
            <div className={styles.contactDiv}>
                <h1 className={styles.contactHeader}>Contato</h1>
                <div>
                    <div>
                        <input id='input-name' type="text" name='name' placeholder='Name' onChange={handleChange}/>
                        <input id='input-email' type="email" name='email' placeholder='E-Mail' onChange={handleChange}/>
                        <textarea id='input-msg' placeholder='Message' name='message' onChange={handleChange}/>
                        <button onClick={handleZap}></button>
                    </div>
                    <h2>Mapa</h2>
                    <div>
                        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width: "500px", height:'300px'}}>
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
                                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Rick Astley - Never Gonna Give You Up (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{width: '100%', height: 'auto'}}></iframe>
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
        </>
    )
}
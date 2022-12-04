import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { FiPower, FiTrash2} from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile () {
    const [incidents, setIncidents] = useState([]);

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName')
    useEffect(() => {
      api.get("profile", {
            headers: {
                Authorization: ongId,
              }
        })
        .then(response => setIncidents(response.data));
    }, [ongId]);
        return (
        <div className="profile-container">
            <header>
             <img src={logoImg} alt="HelPeg" />
             <span>Bem vindo , {ongName}</span>
             
             <Link className="button" to="/incidents/new"> Cadastar novo caso</Link>
            <button  type="button"> 
                <FiPower size={18} color="#e02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
            
            {incidents.map(incident => (
                    <li key={incident.id}>
                    <strong>CASO:</strong>
                    <p>{incident.title}</p>

                    <strong>DESCRIÇAO:</strong>
                    <p>{incident.description}</p>

                    <strong>PREÇO:</strong>
                    <p>{incident.value}</p>

                    <button type="button">
                        <FiTrash2 size={21} color="#a8a8b3" />
                    </button>

                </li>
            
            ))}
            </ul>
        </div>
        );

} 
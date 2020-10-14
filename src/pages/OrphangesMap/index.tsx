import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";

import "./styles.css";
import 'leaflet/dist/leaflet.css';

import LogoImg from "../../assets/images/map-marker.svg";

export default function OrphanagesMap() {
  return (
    <div className="main-wrapper">
      <aside>
        <header>
          <img src={LogoImg} alt="Happy" />

          <h2>Escolha um orfananto no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Sao Bernardo do Campo</strong>
          <span>Sao Paulo</span>
        </footer>
      </aside>

      <Map center={[-23.6266, -46.5638]} zoom={14} style={{ width: '100%', height: '100%' }}>
          {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
          <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

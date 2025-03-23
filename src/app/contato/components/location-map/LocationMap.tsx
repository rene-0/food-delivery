"use client"
import { Icon } from "leaflet"
import { MapContainer } from "react-leaflet/MapContainer"
import { Marker } from "react-leaflet/Marker"
import { Popup } from "react-leaflet/Popup"
import { TileLayer } from "react-leaflet/TileLayer"
import "./location-map.css"

const myIcon = new Icon({
  iconUrl: "/marker2.png",
  iconSize: [25, 41],
})

export function LocationMap() {
  return (
    <MapContainer className="location-map" center={[-22.0737, -48.737]} zoom={15} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={myIcon} position={[-22.0737, -48.737]}>
        <Popup className="text-red-50">Estamos aqui! ;)</Popup>
      </Marker>
    </MapContainer>
  )
}

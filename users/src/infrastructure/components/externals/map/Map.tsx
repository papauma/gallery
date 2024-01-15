import React from 'react'
import { type LatLngExpression } from 'leaflet'
import { MapContainer, Marker, Pane, TileLayer } from 'react-leaflet'

interface iMap {
  centerPosition: LatLngExpression
  zoom: number
}
export default function Map ({ centerPosition, zoom }: iMap): JSX.Element {
  return (
        <MapContainer center={centerPosition}
            preferCanvas={true}
            minZoom={9}
            zoom={ 12}
            style={{ width: '100%', height: '500px', zIndex: '4' }}
            zoomControl={true}
            dragging={true}
            scrollWheelZoom={false}
            attributionControl={false}>
            <Pane name='oms' style={{ zIndex: 4 }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" pane='oms'/>
            </Pane>
            <Marker position={centerPosition} />
        </MapContainer>

  )
}

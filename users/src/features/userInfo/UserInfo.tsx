import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PageTitle from 'main/PageTitle'
import Loader from 'main/Loader'
import LabelValue from '../../components/labelValue/LabelValue'
import { MapContainer, Marker, Pane, TileLayer } from 'react-leaflet'

import './userInfo.scss'

export default function UserInfo (): JSX.Element {
  const [userData, setUserData] = useState() as any
  const userId = useParams().userId

  useEffect(() => {
    const fetchUser = async (): Promise<void> => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
      const data = await response.json()
      setUserData(data)
    }
    fetchUser()
  }, [userId])

  return (
    (userData === null || userData === undefined)
      ? <Loader />
      : <div className="userInfo">
      <PageTitle text={`User information (${userData?.[0]?.name})`} />
      <div className="userInfo_container">
        <div className="userInfo_information">
          <LabelValue label='Name' value={userData?.[0]?.name}/>
          <LabelValue label='User name' value={userData?.[0]?.username} />
          <LabelValue label='Mail' value={userData?.[0]?.email} />
          <LabelValue label='Adress' value={userData?.[0]?.address?.street} />
          <LabelValue label='Phone' value={userData?.[0]?.phone} />
          <LabelValue label='Website' value={userData?.[0]?.website} />
          <div className="userInfo_label">Company:</div>
          <div>{userData?.[0]?.company?.name}</div>
          <div>{userData?.[0]?.company?.catchPhrase}</div>
          <div>{userData?.[0]?.company?.bs}</div>
        </div>
        <div className="userInfo_address">
        <div className="userInfo_label">Address:</div>
          <div>{userData?.[0]?.address?.suite}</div>
          <div>{userData?.[0]?.address?.city}</div>
          <div>{userData?.[0]?.address?.zipcode}</div>
          {userData?.[0]?.address?.geo?.lat
            ? <div id='map' style={{ width: '100%', height: 200, borderColor: 'black', borderWidth: 1 }}>
            <MapContainer center={{ lat: userData?.[0]?.address?.geo?.lat, lng: userData?.[0]?.address?.geo?.lng }}
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
                <Marker position={[userData?.[0]?.address?.geo?.lat, userData?.[0]?.address?.geo?.lng]} />
            </MapContainer>
          </div>
            : ''}
        </div>
      </div>

    </div>
  )
}

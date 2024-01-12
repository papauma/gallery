import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LabelValue from '../../components/labelValue/LabelValue'
import { MapContainer, Marker, Pane, TileLayer } from 'react-leaflet'
import { type iUser } from 'model/interfaces'

import PageTitle from 'main/PageTitle'
import Loader from 'main/Loader'

import './userInfo.scss'

export default function UserInfo (): JSX.Element {
  const [userData, setUserData] = useState<iUser>()
  const [loading, setLoading] = useState<boolean>(true)

  const userId = useParams().userId

  useEffect(() => {
    const fetchUser = async (): Promise<void> => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
      const data = await response.json()
      const user = data[0] as iUser
      setUserData(user)
      setLoading(false)
    }
    fetchUser()
  }, [userId])

  return (
    loading
      ? <Loader />
      : <div className="userInfo">
      <PageTitle text={`User information (${userData?.name})`} />
      <div className="userInfo_container">
        <div className="userInfo_information">
          <LabelValue label='Name' value={userData?.name}/>
          <LabelValue label='User name' value={userData?.username} />
          <LabelValue label='Mail' value={userData?.email} />
          <LabelValue label='Adress' value={userData?.address?.street} />
          <LabelValue label='Phone' value={userData?.phone} />
          <LabelValue label='Website' value={userData?.website} />
          <div className="userInfo_label">Company:</div>
          <div>{userData?.company?.name}</div>
          <div>{userData?.company?.catchPhrase}</div>
          <div>{userData?.company?.bs}</div>
        </div>
        <div className="userInfo_address">
        <div className="userInfo_label">Address:</div>
          <div>{userData?.address?.suite}</div>
          <div>{userData?.address?.city}</div>
          <div>{userData?.address?.zipcode}</div>
          {userData?.address?.geo?.lng !== null && userData?.address?.geo.lat !== null && userData?.address?.geo?.lng !== undefined && userData?.address?.geo.lat !== undefined
            ? <div id='map' style={{ width: '100%', height: 200, borderColor: 'black', borderWidth: 1 }}>
            <MapContainer center={{ lat: userData.address.geo.lat, lng: userData.address.geo.lng }}
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
                <Marker position={[userData?.address?.geo?.lat, userData?.address?.geo?.lng]} />
            </MapContainer>
          </div>
            : ''}
        </div>
      </div>

    </div>
  )
}

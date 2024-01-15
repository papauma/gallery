import * as React from 'react'
import { type User } from '../../../domain/models/User'
import UsersService from '../../../domain/services/Users.service'
import { useParams } from 'react-router-dom'
import LabelValue from '../ui/labelValue/LabelValue'
import Map from '../externals/map/Map'

import PageTitle from 'main/PageTitle'
import Loader from 'main/Loader'

import './userInfo.scss'
import ButtonAction from '../ui/buttonAction/ButtonAction'

export default function UserList (): JSX.Element {
  const [userData, setUserData] = React.useState<User>()
  const [loading, setLoading] = React.useState<boolean>(true)

  const userId = useParams().userId

  React.useEffect(() => {
    if (userId !== undefined) {
      UsersService.getUserById(parseInt(userId)).then(user => { setUserData(user) })
      setLoading(false)
    }
  }, [userId])

  return (
    loading
      ? <Loader />
      : userData !== null && userData !== undefined
        ? <div className="userInfo">
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
            <div className='userInfo_buttonContainer'>
              <ButtonAction type= 'SECONDARY' text='See user albums' link={`/albums/${userData?.id}`} />
            </div>
          </div>
          <div className="userInfo_address">
          <div className="userInfo_label">Address:</div>
            <div>{userData?.address?.suite}</div>
            <div>{userData?.address?.city}</div>
            <div>{userData?.address?.zipcode}</div>
            {userData?.address?.geo?.lng !== null && userData?.address?.geo.lat !== null && userData?.address?.geo?.lng !== undefined && userData?.address?.geo.lat !== undefined
              ? <div id='map' style={{ width: '100%', height: 200, borderColor: 'black', borderWidth: 1 }}>
                <Map centerPosition={[userData?.address?.geo?.lat, userData?.address?.geo?.lng]} zoom={12}/>
            </div>
              : <></> }
          </div>
        </div>
      </div>
        : <>No user</>
  )
}
